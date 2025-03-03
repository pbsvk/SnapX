import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { SigninValidation } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import{ Link, useNavigate } from "react-router-dom";
import { toast } from "sonner"
import { useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"

const SigninForm = () => {
  const {checkAuthUser, isPending: isUserLoading} = useUserContext();
  // const {mutateAsync: createUserAccount, isPending: isCreatingAccount} = useCreateUserAccount();
  const {mutateAsync: signInAccount} = useSignInAccount();
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      // name: "",
      // username: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    })
    
    if (!session) {
      return toast.error("Failed to sign in.");
    }

    const isLoggedIn = await checkAuthUser();
    if(isLoggedIn) {
      form.reset();
      navigate('/');
    }
    else{
      return toast.error("Failed to sign in."); 
    }


  }
  return (
    <Form {...form}>
      
  <video 
    autoPlay
    loop
    muted
    className='fixed top-0 left-0 min-w-full min-h-full object-cover z-[-1] invert'
    >
    <source src="/assets/images/bg-video.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>

      <div className = 'sm:w:420 flex-center flex-col'>
          <img src = "/assets/images/logo.svg" alt="logo"/>
          <h2 className="h2-bold md:h2-bold pt-5 sm:pt-8">SnapX</h2>
          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-8">
            Sign In to your account
          </h2>
          <p className="text-light-3 small-medium md:base-regular mt-6">Welcome back, please enter your account details</p>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type = 'email' className="shadow-input rounded-xl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type = 'password' className="shadow-input rounded-xl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary rounded-xl">
            {isUserLoading ? (
            <div className="flex-center gap-2">
              <Loader />
            </div>
            ): "Sign In"}

          </Button>
          <p className = 'text-sm-regular text-light-2 text-center mt-2'>Don't have an account?
            <Link to = "/sign-up" className = "text-primary-500 text-small-semi-bold ml-1"> Sign Up</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SigninForm