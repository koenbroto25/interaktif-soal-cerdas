
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { GraduationCap, Eye, EyeOff, Mail, Lock, User, UserCheck, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student' as 'student' | 'teacher' | 'admin'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { signUp, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Password dan konfirmasi password tidak cocok.",
        variant: "destructive",
      });
      return;
    }

    if (!agreeTerms) {
      toast({
        title: "Error",
        description: "Silakan setujui syarat dan ketentuan terlebih dahulu.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await signUp(formData.email, formData.password, formData.name, formData.userType);

      if (error) {
        toast({
          title: "Error Registrasi",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Registrasi Berhasil!",
          description: "Akun Anda telah berhasil dibuat. Silakan periksa email untuk konfirmasi.",
        });
        navigate('/login');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat registrasi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="bg-primary p-3 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <span className="text-3xl font-bold text-primary">EduWorksheet</span>
          </Link>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold">Buat Akun Baru</CardTitle>
            <CardDescription>
              Bergabunglah dengan ribuan pengguna EduWorksheet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-3">
                <Label>Saya adalah</Label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleInputChange('userType', 'student')}
                    className={`flex flex-col items-center justify-center space-y-1 p-3 rounded-lg border-2 transition-colors ${
                      formData.userType === 'student'
                        ? 'border-primary bg-primary-50 text-primary'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <Users className="h-4 w-4" />
                    <span className="text-xs">Siswa</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('userType', 'teacher')}
                    className={`flex flex-col items-center justify-center space-y-1 p-3 rounded-lg border-2 transition-colors ${
                      formData.userType === 'teacher'
                        ? 'border-primary bg-primary-50 text-primary'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <UserCheck className="h-4 w-4" />
                    <span className="text-xs">Guru</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('userType', 'admin')}
                    className={`flex flex-col items-center justify-center space-y-1 p-3 rounded-lg border-2 transition-colors ${
                      formData.userType === 'admin'
                        ? 'border-primary bg-primary-50 text-primary'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <User className="h-4 w-4" />
                    <span className="text-xs">Admin</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Buat password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Ulangi password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  Saya setuju dengan{" "}
                  <Link to="/terms" className="text-primary hover:text-primary-600">
                    Syarat dan Ketentuan
                  </Link>{" "}
                  serta{" "}
                  <Link to="/privacy" className="text-primary hover:text-primary-600">
                    Kebijakan Privasi
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-600"
                disabled={isLoading}
              >
                {isLoading ? "Membuat Akun..." : "Daftar Sekarang"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Sudah punya akun?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:text-primary-600 font-medium"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
