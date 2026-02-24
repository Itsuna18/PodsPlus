import { useState } from 'react'
import { 
  Box, Button, Flex, FormControl, FormLabel, 
  Heading, Input, VStack, useToast, Image, Text 
} from '@chakra-ui/react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()

  const handleLogin = (e) => {
    e.preventDefault()
    // Aquí conectaremos Supabase más adelante
    toast({
      title: 'Intentando iniciar sesión',
      description: "Pronto conectaremos esto a la base de datos.",
      status: 'info',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box bg="white" p={8} rounded="lg" shadow="lg" w="full" maxW="md">
        <VStack spacing={6} as="form" onSubmit={handleLogin}>
          
          <Heading size="xl" color="blue.600">PodsPlus</Heading>
          <Text color="gray.500">Ingresa al sistema de ventas</Text>

          <FormControl id="email" isRequired>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vendedor@podsplus.com"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <Input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </FormControl>

          <Button 
            type="submit" 
            colorScheme="blue" 
            size="lg" 
            w="full" 
            mt={4}
          >
            Entrar
          </Button>

        </VStack>
      </Box>
    </Flex>
  )
}