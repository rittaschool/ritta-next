import Image from 'next/image';
import { useRef } from 'react';
import { Button, Card, Form } from '../components';
import useAuthentication from '../hooks/useAuthentication';

const Login = () => {
  const { login, user, authenticated } = useAuthentication();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login((emailRef.current as any).value, (passwordRef.current as any).value);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-primary">
      <div className="max-w-fit">
        <Card
          isImageAtTop
          imageSrc="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        >
          {authenticated ? (
            <div className="min-w-[360px] px-12 pb-12 flex flex-col items-center justify-center">
              <h1 className="text-black text-center text-2xl">
                Tervetuloa, {user?.firstName || 'unknown'}!
              </h1>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <div className="h-full min-w-[360px] px-12 pb-12 flex flex-col">
                <h1 className="text-black text-xl font-bold text-center my-auto">
                  Kirjaudu Sisään
                </h1>
                <input
                  ref={emailRef}
                  type="email"
                  className="rounded text-primary mb-4 mt-8 w-full max-w-md border-light"
                  name="identifier"
                  placeholder="Käyttäjänimi"
                />
                <input
                  ref={passwordRef}
                  type="password"
                  className="rounded text-primary mb-4 w-full max-w-md border-light"
                  name="password"
                  placeholder="Salasana"
                />
                <Button
                  text="Seuraava"
                  className="rounded bg-blue-500 p-2 w-full max-w-md text-light"
                />
              </div>
            </Form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Login;
