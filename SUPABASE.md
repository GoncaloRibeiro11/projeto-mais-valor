# Projeto Mais Valor · Ligação ao Supabase

1. Cria um projeto em Supabase e abre **SQL Editor**.
2. Executa todo o conteúdo de `supabase/schema.sql`.
3. Em **Project Settings > API**, copia o Project URL e a chave pública/publishable.
4. Cola esses dois valores em `supabase-config.js`.
5. Em **Authentication > URL Configuration**, adiciona os endereços usados pela aplicação, por exemplo `http://127.0.0.1:4173` e `http://192.168.1.98:4173`.
6. Reinicia a aplicação com `npm start`.

Nunca coloques a chave `service_role` no browser. A aplicação usa apenas a chave pública e as regras RLS de `schema.sql` para manter os dados separados por conta.

O registo público está desativado. O Admin pode criar acessos em **Parceiros > Convidar parceiro**. O destinatário recebe um link do Supabase, regressa à aplicação e define a própria palavra-passe. A operação usa a Edge Function `invite-partner`, que confirma o perfil Admin antes de chamar a API administrativa; a chave privada nunca é enviada para o browser.

O código da função está em `supabase/functions/invite-partner/index.ts`. O URL oficial configurado em **Authentication > URL Configuration** é `https://goncaloribeiro11.github.io/projeto-mais-valor/`, com `https://goncaloribeiro11.github.io/projeto-mais-valor/**` na lista de redirecionamentos permitidos.

O serviço de email incluído no Supabase é adequado para testes e tem limites reduzidos. Para utilização regular, configura um SMTP próprio em **Authentication > Emails > SMTP Settings**.

Para associar um parceiro a um Leader, preenche `leader_id` com o `user_id` do Leader.

Para ativar o painel global, executa `supabase/admin-panel.sql` e altera o campo `role` da conta responsável para `admin`. Essa conta passa a ter acesso de leitura aos resumos globais de parceiros, referências, vendas e comissões através de funções protegidas no servidor.
