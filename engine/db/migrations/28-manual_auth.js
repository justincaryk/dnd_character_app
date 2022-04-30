exports.up = knex =>
  knex.schema.raw(`
            create type app_status AS ENUM ('applied', 'active');
            
            alter table minion
            add column status app_status default 'applied';

            CREATE OR REPLACE FUNCTION public.signin (username text, PASSWORD text)
            RETURNS public.jwt_token
            AS $$
            DECLARE
                account public.minion;
                wiz_acc public.wizard;
                ROLE text;
            BEGIN
                SELECT * FROM public.minion AS a
                WHERE
                    a.user_name = $1 INTO account
                    AND a.status = 'active';
                
                SELECT * FROM public.wizard AS b
                WHERE
                    account.id = user_id INTO wiz_acc;
                IF wiz_acc.user_id = account.id THEN
                    ROLE = 'role_minion';
                ELSE
                    ROLE = 'role_minion';
                END IF;
                IF account.password = crypt(PASSWORD, account.password) THEN
                    RETURN (ROLE,
                        extract(epoch FROM now() + interval '365 days'),
                        account.id,
                        account.user_name)::public.jwt_token;
                ELSE
                    RETURN NULL;
                END IF;
            END;
            $$
            LANGUAGE plpgsql VOLATILE SECURITY DEFINER;
        `)

exports.down = knex => knex.schema.raw(``)
