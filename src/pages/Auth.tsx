import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import gteLogo from "@/assets/gte-logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import API from "@/api/axiosInstance";
import useAuth from "../context/AuthContext";

const Auth = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirm, setRegisterConfirm] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await API.post("/auth/login", { 
        email: loginEmail, 
        password: loginPassword 
      });

       login({
        _id: res.data.user._id,
        email: res.data.user.email,
        role: res.data.user.role,
        token: res.data.token,
      });

      localStorage.setItem("token", res.data.token);
      // Redirect user based on role
      const role = res.data.user.role;
      if (role === "admin" || role === "instructor") {
        alert("Login successful:" + role);
        navigate("/courses/create");
      } else {
        alert("Login successful:" + role);
        navigate("/courses");
      }
    } catch (error: any) {
      let errorMessage = "Login failed";
      
      if (error.response) {
        // Backend returned error response
        errorMessage = error.response.data?.message || error.response.statusText || "Login failed";
        console.error("Backend Error:", error.response.data);
      } else if (error instanceof Error) {
        // Network or other error
        errorMessage = error.message;
        console.error("Error:", error.message);
      }
      
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (registerPassword !== registerConfirm) {
        alert("Passwords do not match");
        return;
      }
      
      const res = await API.post("/auth/register", {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
        role: "student"
      });
      localStorage.setItem("token", res.data.token);
      alert("Registration successful");
      navigate("/courses");
    } catch (error: any) {
      let errorMessage = "Registration failed";
      
      if (error.response) {
        // Backend returned error response
        errorMessage = error.response.data?.message || error.response.statusText || "Registration failed";
        console.error("Backend Error:", error.response.data);
      } else if (error instanceof Error) {
        // Network or other error
        errorMessage = error.message;
        console.error("Error:", error.message);
      }
      
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-magenta/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="w-full max-w-md relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <div className="flex justify-center mb-8">
          <img src={gteLogo} alt="GTE Logo" className="h-16 w-auto animate-glow-pulse" />
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm shadow-cyber">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              Welcome to GTE
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Start your journey in the Tech era
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="border-primary/30 focus:border-primary bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="border-primary/30 focus:border-primary bg-background/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="cyber"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      className="border-primary/30 focus:border-primary bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="border-primary/30 focus:border-primary bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="border-primary/30 focus:border-primary bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-confirm">Confirm Password</Label>
                    <Input
                      id="register-confirm"
                      type="password"
                      placeholder="••••••••"
                      required
                      value={registerConfirm}
                      onChange={(e) => setRegisterConfirm(e.target.value)}
                      className="border-primary/30 focus:border-primary bg-background/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="cyber"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
