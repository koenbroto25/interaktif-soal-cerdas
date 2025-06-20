
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { GraduationCap, Eye, EyeOff, Mail, Lock, User, Users, UserCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { signIn, user } = useAuth();
  const navigate = useNavigate();

  // Demo credentials
  const demoAccounts = [
    {
      role: 'Admin',
      email: 'admin@eduworksheet.com',
      password: 'demoedu123',
      icon: User,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      role: 'Guru',
      email: 'teacher@eduworksheet.com',
      password: 'demoedu123',
      icon: UserCheck,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      role: 'Siswa',
      email: 'student@eduworksheet.com',
      password: 'demoedu123',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await signIn(email, password);

      if (error) {
        toast({
          title: "Error Login",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Login Berhasil!",
          description: "Selamat datang kembali di EduWorksheet.",
        });
        navigate('/dashboard');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat login.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = (demoEmail: string, demoPassword: string) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex gap-8">
        {/* Demo Accounts Panel */}
        <div className="w-1/2">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Demo Accounts</h3>
            <p className="text-gray-600 mb-6">Gunakan akun demo untuk mengakses fitur aplikasi:</p>
            
            <div className="space-y-4">
              {demoAccounts.map((account, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                     onClick={() => handleDemoLogin(account.email, account.password)}>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`${account.bgColor} p-2 rounded-lg`}>
                      <account.icon className={`h-5 w-5 ${account.color}`} />
                    </div>
                    <h4 className="font-semibold text-gray-900">{account.role}</h4>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Email:</strong> {account.email}</p>
                    <p><strong>Password:</strong> {account.password}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-1/2">
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
              <CardTitle className="text-2xl font-bold">Masuk ke Akun Anda</CardTitle>
              <CardDescription>
                Selamat datang kembali! Silakan masuk untuk melanjutkan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked === true)}
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Ingat saya
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:text-primary-600 font-medium"
                  >
                    Lupa password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Memproses..." : "Masuk"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Belum punya akun?{" "}
                  <Link
                    to="/register"
                    className="text-primary hover:text-primary-600 font-medium"
                  >
                    Daftar sekarang
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
    </div>
  );
};

export default Login;
