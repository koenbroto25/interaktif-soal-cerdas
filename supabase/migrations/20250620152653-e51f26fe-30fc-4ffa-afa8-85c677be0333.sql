
-- Create enum for user roles
CREATE TYPE public.user_role AS ENUM ('admin', 'teacher', 'student');

-- Create profiles table to store additional user information
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  role user_role NOT NULL DEFAULT 'student',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles table
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create classes table
CREATE TABLE public.classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  teacher_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  class_code TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on classes table
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;

-- Create worksheets table
CREATE TABLE public.worksheets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  content JSONB,
  creator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  is_public BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on worksheets table
ALTER TABLE public.worksheets ENABLE ROW LEVEL SECURITY;

-- Create class_members table (many-to-many relationship between students and classes)
CREATE TABLE public.class_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(class_id, student_id)
);

-- Enable RLS on class_members table
ALTER TABLE public.class_members ENABLE ROW LEVEL SECURITY;

-- Create class_worksheets table (worksheets assigned to classes)
CREATE TABLE public.class_worksheets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  worksheet_id UUID REFERENCES public.worksheets(id) ON DELETE CASCADE,
  assigned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  due_date TIMESTAMP WITH TIME ZONE,
  UNIQUE(class_id, worksheet_id)
);

-- Enable RLS on class_worksheets table
ALTER TABLE public.class_worksheets ENABLE ROW LEVEL SECURITY;

-- Create student_submissions table (student work on worksheets)
CREATE TABLE public.student_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  worksheet_id UUID REFERENCES public.worksheets(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  answers JSONB,
  score DECIMAL(5,2),
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(worksheet_id, student_id, class_id)
);

-- Enable RLS on student_submissions table
ALTER TABLE public.student_submissions ENABLE ROW LEVEL SECURITY;

-- Create security definer function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID DEFAULT auth.uid())
RETURNS user_role
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT role FROM public.profiles WHERE id = user_id;
$$;

-- Create RLS policies for classes
CREATE POLICY "Teachers can manage their own classes" ON public.classes
  FOR ALL USING (teacher_id = auth.uid());

CREATE POLICY "Students can view classes they're members of" ON public.classes
  FOR SELECT USING (
    id IN (
      SELECT class_id FROM public.class_members WHERE student_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all classes" ON public.classes
  FOR ALL USING (public.get_user_role() = 'admin');

-- Create RLS policies for worksheets
CREATE POLICY "Users can view public worksheets" ON public.worksheets
  FOR SELECT USING (is_public = TRUE);

CREATE POLICY "Creators can manage their own worksheets" ON public.worksheets
  FOR ALL USING (creator_id = auth.uid());

CREATE POLICY "Teachers can view worksheets assigned to their classes" ON public.worksheets
  FOR SELECT USING (
    id IN (
      SELECT worksheet_id FROM public.class_worksheets cw
      JOIN public.classes c ON cw.class_id = c.id
      WHERE c.teacher_id = auth.uid()
    )
  );

CREATE POLICY "Students can view worksheets assigned to their classes" ON public.worksheets
  FOR SELECT USING (
    id IN (
      SELECT worksheet_id FROM public.class_worksheets cw
      JOIN public.class_members cm ON cw.class_id = cm.class_id
      WHERE cm.student_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all worksheets" ON public.worksheets
  FOR ALL USING (public.get_user_role() = 'admin');

-- Create RLS policies for class_members
CREATE POLICY "Teachers can manage members of their classes" ON public.class_members
  FOR ALL USING (
    class_id IN (
      SELECT id FROM public.classes WHERE teacher_id = auth.uid()
    )
  );

CREATE POLICY "Students can view their own class memberships" ON public.class_members
  FOR SELECT USING (student_id = auth.uid());

CREATE POLICY "Admins can manage all class members" ON public.class_members
  FOR ALL USING (public.get_user_role() = 'admin');

-- Create RLS policies for class_worksheets
CREATE POLICY "Teachers can manage worksheets in their classes" ON public.class_worksheets
  FOR ALL USING (
    class_id IN (
      SELECT id FROM public.classes WHERE teacher_id = auth.uid()
    )
  );

CREATE POLICY "Students can view worksheets assigned to their classes" ON public.class_worksheets
  FOR SELECT USING (
    class_id IN (
      SELECT class_id FROM public.class_members WHERE student_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all class worksheets" ON public.class_worksheets
  FOR ALL USING (public.get_user_role() = 'admin');

-- Create RLS policies for student_submissions
CREATE POLICY "Students can manage their own submissions" ON public.student_submissions
  FOR ALL USING (student_id = auth.uid());

CREATE POLICY "Teachers can view submissions in their classes" ON public.student_submissions
  FOR SELECT USING (
    class_id IN (
      SELECT id FROM public.classes WHERE teacher_id = auth.uid()
    )
  );

CREATE POLICY "Teachers can update scores for submissions in their classes" ON public.student_submissions
  FOR UPDATE USING (
    class_id IN (
      SELECT id FROM public.classes WHERE teacher_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all submissions" ON public.student_submissions
  FOR ALL USING (public.get_user_role() = 'admin');

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'student')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert demo users (Note: These will be created in auth.users by Supabase Auth)
-- For now, we'll create the profiles manually after the users are created via Auth

-- Create function to generate random class codes
CREATE OR REPLACE FUNCTION public.generate_class_code()
RETURNS TEXT AS $$
BEGIN
  RETURN upper(substring(md5(random()::text) from 1 for 8));
END;
$$ LANGUAGE plpgsql;

-- Add default value for class_code
ALTER TABLE public.classes ALTER COLUMN class_code SET DEFAULT public.generate_class_code();
