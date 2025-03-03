import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { SignupValidation } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import{ Link, useNavigate } from "react-router-dom";
import { toast } from "sonner"
import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"

const SignupForm = () => {
  const {checkAuthUser, isPending: isUserLoading} = useUserContext();
  const {mutateAsync: createUserAccount, isPending: isCreatingAccount} = useCreateUserAccount();
  const {mutateAsync: signInAccount, isPending: isSigningIn} = useSignInAccount();
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAccount(values);
    if (!newUser) {
      return toast.error("Failed to create user account.");
    }
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
      return toast.error("Failed to sign up."); 
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
            Create a new account
          </h2>
          <p className="text-light-3 small-medium md:base-regular mt-6">To use Snapgram, please enter your account details</p>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type = 'text' className="shadow-input rounded-xl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type = 'text' className="shadow-input rounded-xl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            {isCreatingAccount ? (
            <div className="flex-center gap-2">
              <Loader />
            </div>
            ): "Sign up"}

          </Button>
          <p className = 'text-sm-regular text-light-2 text-center mt-2'>Already have an account?
            <Link to = "/sign-in" className = "text-primary-500 text-small-semi-bold ml-1"> Log in</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignupForm