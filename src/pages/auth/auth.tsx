import { useToggle, upperFirst } from '@mantine/hooks'
import { useForm, yupResolver } from '@mantine/form'
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Anchor,
  Stack,
  Container,
} from '@mantine/core'
import * as Yup from 'yup'
import { useCallback } from 'react'
import { useRegister, useLogin } from './hooks'
import { useAuthContext } from '../../providers'
import { useNavigate } from 'react-router-dom'

const loginSchema = Yup.object({
  username: Yup.string().min(6).max(10).required().label('Username'),
  password: Yup.string().min(6).required().label('Password'),
})
const registerSchema = Yup.object({
  fullName: Yup.string().required().label('Full name'),
  username: Yup.string().min(6).max(10).required().label('Username'),
  password: Yup.string().min(6).required().label('Password'),
})

interface AuthForm {
  fullName: string
  username: string
  password: string
}

export function Auth(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register'])
  const { login: authLogin } = useAuthContext()
  const navigate = useNavigate()

  const form = useForm<AuthForm>({
    initialValues: {
      fullName: '',
      username: '',
      password: '',
    },
    validate:
      type === 'login' ? yupResolver(loginSchema) : yupResolver(registerSchema),
  })

  const {
    mutate: login,
    isLoading: isLoginLoading,
    isError: isLoginError,
  } = useLogin({
    onSuccess: ({ accessToken }) => {
      authLogin(accessToken)
      navigate('/books')
    },
  })

  const {
    mutate: register,
    isLoading: isRegisterLoading,
    isError: isRegisterError,
  } = useRegister({
    onSuccess: () => {
      login({
        username: form.values.username,
        password: form.values.password,
      })
    },
  })

  const onSubmit = useCallback(
    (value: AuthForm) => {
      if (type === 'register') {
        register(value)
        return
      }
      login(value)
    },
    [type]
  )

  return (
    <Container size="xs" px="sm" pt={120}>
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" mb="xl" weight={500}>
          Welcome to Book Library, {type} with
        </Text>
        <form onSubmit={form.onSubmit(onSubmit)}>
          <Stack>
            {type === 'register' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                {...form.getInputProps('fullName')}
              />
            )}
            <TextInput
              required
              label="Username"
              placeholder="tamdao"
              {...form.getInputProps('username')}
            />
            <PasswordInput
              required
              label="Password"
              placeholder="123456"
              {...form.getInputProps('password')}
            />
          </Stack>
          {isLoginError && (
            <Text color="red" size="sm" mt="sm">
              The username or password is incorrect
            </Text>
          )}
          {isRegisterError && (
            <Text color="red" size="sm" mt="sm">
              Username is already exists
            </Text>
          )}
          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Button
              type="submit"
              disabled={isLoginLoading || isRegisterLoading}
            >
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}
