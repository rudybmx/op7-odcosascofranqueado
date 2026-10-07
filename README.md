# op7-odcosascofranqueado

Landing page OP7 exportada da VPS cypher em 07/10/2026.

- **Domínio:** odcosascofranqueado.op7pages.website
- **Como roda:** Node 22 -> npm run build -> nginx (Dockerfile multi-stage), porta 80
- **Subir:** `docker build -t op7-odcosascofranqueado .` e `docker run -d -p <porta>:<porta da linha acima> op7-odcosascofranqueado`
