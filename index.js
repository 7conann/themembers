// Função para registrar o desenvolvedor
async function registerDeveloper(developerData) {
    const response = await fetch('https://registration.themembers.dev.br/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(developerData)
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('developerId', data.id);
        return data.id;
    } else {
        throw new Error('Erro ao registrar desenvolvedor');
    }
}

// Função para gerar o token do desenvolvedor
async function generateToken(developerId) {
    const response = await fetch('https://registration.themembers.dev.br/api/generate-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: developerId })
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('developerToken', data.token);
        return data.token;
    } else {
        throw new Error('Erro ao gerar token');
    }
}

// Função para buscar usuário por ID
async function getUserById(userId) {
    const token = localStorage.getItem('developerToken');
    const platformToken = 'token_da_plataforma'; // Substitua pelo token da plataforma

    const response = await fetch(`https://registration.themembers.dev.br/api/users/show-id/${userId}/${token}/${platformToken}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Erro ao buscar usuário por ID');
    }
}

// Função para buscar usuário por documento
async function getUserByDocument(document) {
    const token = localStorage.getItem('developerToken');
    const platformToken = 'token_da_plataforma'; // Substitua pelo token da plataforma

    const response = await fetch(`https://registration.themembers.dev.br/api/users/show-document/${document}/${token}/${platformToken}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Erro ao buscar usuário por documento');
    }
}

// Função para buscar usuário por e-mail
async function getUserByEmail(email) {
    const token = localStorage.getItem('developerToken');
    const platformToken = 'token_da_plataforma'; // Substitua pelo token da plataforma

    const response = await fetch(`https://registration.themembers.dev.br/api/users/show-email/${email}/${token}/${platformToken}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Erro ao buscar usuário por e-mail');
    }
}

// Função para buscar usuário por ID de referência
async function getUserByReferenceId(referenceId) {
    const token = localStorage.getItem('developerToken');
    const platformToken = 'token_da_plataforma'; // Substitua pelo token da plataforma

    const response = await fetch(`https://registration.themembers.dev.br/api/users/show-reference/${referenceId}/${token}/${platformToken}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Erro ao buscar usuário por ID de referência');
    }
}

// Função para criar usuários
async function createUsers(usersData) {
    const token = localStorage.getItem('developerToken');
    const platformToken = 'token_da_plataforma'; // Substitua pelo token da plataforma

    const response = await fetch(`https://registration.themembers.dev.br/api/users/create/${token}/${platformToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(usersData)
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Erro ao criar usuários');
    }
}

// Função para excluir usuário por ID
async function deleteUserById(userId) {
    const token = localStorage.getItem('developerToken');
    const platformToken = 'token_da_plataforma'; // Substitua pelo token da plataforma

    const response = await fetch(`https://registration.themembers.dev.br/api/users/destroy-user-id/${userId}/${token}/${platformToken}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Erro ao excluir usuário por ID');
    }
}

// Função para excluir usuário por documento
async function deleteUserByDocument(document) {
    const token = localStorage.getItem('developerToken');
    const platformToken = 'token_da_plataforma'; // Substitua pelo token da plataforma

    const response = await fetch(`https://registration.themembers.dev.br/api/users/destroy-document/${document}/${token}/${platformToken}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Erro ao excluir usuário por documento');
    }
}

// Função para excluir usuário por e-mail
async function deleteUserByEmail(email) {
    const token = localStorage.getItem('developerToken');
    const platformToken = 'token_da_plataforma'; // Substitua pelo token da plataforma

    const response = await fetch(`https://registration.themembers.dev.br/api/users/destroy-email/${email}/${token}/${platformToken}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Erro ao excluir usuário por e-mail');
    }
}

// Função para excluir usuário por ID de referência
async function deleteUserByReferenceId(referenceId) {
    const token = localStorage.getItem('developerToken');
    const platformToken = 'token_da_plataforma'; // Substitua pelo token da plataforma

    const response = await fetch(`https://registration.themembers.dev.br/api/users/destroy-reference-id/${referenceId}/${token}/${platformToken}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Erro ao excluir usuário por ID de referência');
    }
}

// Exemplo de uso
(async () => {
    try {
        const developerData = {
            name: 'Seu Nome',
            document: '123.456.789-98',
            email: 'email@email.com',
            phone: '(00) 00 00000-9999',
            corporation_name: 'Empresa Teste',
            corporation_cnpj: '00.000.000/0001-00',
            app_name: 'teste-teste',
            app_desc: 'Descrição do aplicativo',
            corporation_address: 'Rua teste, Nº 15, Bairro teste, Cidade-SP'
        };

        const developerId = await registerDeveloper(developerData);
        const token = await generateToken(developerId);
        const data = await getData('https://registration.themembers.dev.br/api/some-endpoint');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
})();