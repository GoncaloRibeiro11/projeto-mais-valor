# Projeto Mais Valor · Ligação ao Supabase

1. Cria um projeto em Supabase e abre **SQL Editor**.
2. Executa todo o conteúdo de `supabase/schema.sql`.
3. Em **Project Settings > API**, copia o Project URL e a chave pública/publishable.
4. Cola esses dois valores em `supabase-config.js`.
5. Em **Authentication > URL Configuration**, adiciona os endereços usados pela aplicação, por exemplo `http://127.0.0.1:4173` e `http://192.168.1.98:4173`.
6. Reinicia a aplicação com `npm start`.

Nunca coloques a chave `service_role` no browser. A aplicação usa apenas a chave pública e as regras RLS de `schema.sql` para manter os dados separados por conta.

O registo público está desativado. As contas devem ser criadas por um administrador em **Authentication > Users**; o perfil de parceiro é criado automaticamente como **Referenciador**. A promoção para Consultor, Leader ou Admin deve ser feita por um administrador na tabela `partner_profiles`. Para associar um parceiro a um Leader, preenche `leader_id` com o `user_id` do Leader.

Para ativar o painel global, executa `supabase/admin-panel.sql` e altera o campo `role` da conta responsável para `admin`. Essa conta passa a ter acesso de leitura aos resumos globais de parceiros, referências, vendas e comissões através de funções protegidas no servidor.
