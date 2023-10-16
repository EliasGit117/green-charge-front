import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Check, Cross, KeyRound, LogInIcon, Terminal, X } from 'lucide-react';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Separator } from '@/components/ui/separator.tsx';
import { Link } from 'react-router-dom';
import charging from '../../public/charging.png';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import toast from 'react-hot-toast';
import { Close } from '@radix-ui/react-popover';
import * as wasi from 'wasi';
import { useTheme } from '@/components/theme-select/theme-provider.tsx';

type TSignInForm = {
  email: string;
  password: string;
};

const SignInPage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = useForm<TSignInForm>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: TSignInForm) => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 2000));

    if (data.email === 'HelloWorld@gmail.com' && data.password === 'HelloWorld') {
      const toastId = toast.custom((t) => (
        <Alert className={
          `bg-background shadow-md border-2 max-w-md flex justify-between  ${t.visible ? 'animate-enter' : 'animate-leave'}`
        }>
          <AlertDescription className="font-bold">
            Success, you will be redirected to home
          </AlertDescription>
          <Button variant="ghost" size="xs" onClick={() => toast.dismiss(toastId)}>
            <X className="h-4 w-4"/>
          </Button>
        </Alert>
      ));
    } else {
      const toastId = toast.custom((t) => (
        <Alert variant="destructive" className={
          `bg-background shadow-md border-2 max-w-md flex justify-between  ${t.visible ? 'animate-enter' : 'animate-leave'}`
        }>
          <AlertDescription className="font-bold">
            Wrong email or password
          </AlertDescription>
          <Button variant="ghost" size="xs" onClick={() => toast.dismiss(toastId)}>
            <X className="h-4 w-4"/>
          </Button>
        </Alert>
      ));
    }

    setIsLoading(false);
  };


  return (
    <main className="container grid grid-cols-1 md:grid-cols-2 py-8 gap-16 grow">

      <figure className="hidden md:block">
        <img
          src={charging}
          alt="img"
          className="h-full object-cover object-left rounded-4xl"
          style={{ borderRadius: '64px 0 64px 0' }}
        />
      </figure>

      <section>

        <Card className="w-full max-w-2xl ml-auto mr-auto mt-12 md:mt-32">

          <CardHeader>
            <CardTitle className="flex gap-2 items-center">
              <LogInIcon/>
              <span>{t('pages.signIn.title')}</span>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">

            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <fieldset disabled={isLoading} className="space-y-4">

                <Input
                  type="email"
                  name="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  placeholder={t('forms.names.email')}
                  {...register('email', {
                    required: t('forms.errors.required'),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t('forms.errors.invalidEmail')
                    }
                  })}
                />
                {errors.email && <p role="alert" className="text-sm pl-2 text-destructive">{errors.email?.message}</p>}

                <Input
                  type="password"
                  placeholder={t('forms.names.password')}
                  {...register('password')}
                />

                <Button type="submit" className="w-full" disabled={!isValid}>
                  <Check className="mr-2 h-4 w-4"/> {t('generic.submit')}
                </Button>
              </fieldset>
            </form>


            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full"/>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <div className="bg-background px-2">
                  {t('pages.signIn.or')}
                </div>
              </div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Button variant="outline" asChild>
                <Link to="/sign-up">
                  {t('pages.signIn.signUp')}
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link to="/resest-password">
                  {t('pages.signIn.resetPassword')}
                </Link>
              </Button>
            </section>

          </CardContent>

          <CardFooter>
            <Alert>
              <KeyRound className="h-4 w-4">
                Heads up!
              </KeyRound>
              <AlertDescription>
                <b>Email:</b> HelloWorld@gmail.com <br/>
                <b>Password:</b> HelloWorld
              </AlertDescription>
            </Alert>
          </CardFooter>

        </Card>
      </section>

    </main>
  )
    ;
};

export default SignInPage;
