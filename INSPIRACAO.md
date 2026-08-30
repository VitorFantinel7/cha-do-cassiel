# Inspiração — Página do Chá de Bebê do Cassiel

Objetivo: criar uma página única (one-page) para o chá de bebê, bonita, leve e
funcional no celular, onde os convidados veem os detalhes da festa e escolhem
um presente ou um pacote de fraldas.

Referência de código existente: `cha-do-cassiel.jsx` (React + lucide-react).

---

## 1. Conceito visual

- **Tema:** ursinho de pelúcia, aconchego, tons de creme e azul-bebê.
- **Sensação:** delicado, quente, artesanal — como um cartão de convite feito à mão.
- **Tipografia:** `Playfair Display` (títulos, serifada, elegante) + `Poppins` (texto).
- **Formas:** bordas bem arredondadas (24–32px), sombras suaves, sem linhas duras.
- **Detalhes:** nuvens, estrelinhas, corações e patinhas flutuando ao fundo, bem sutis.

## 2. Paleta (já usada no JSX)

| Token           | Cor       | Uso                          |
|-----------------|-----------|------------------------------|
| `--cream`       | `#F8F4EC` | fundo da página              |
| `--cream-deep`  | `#F1E7D3` | seções alternadas            |
| `--blue-baby`   | `#AFC5D8` | destaques suaves, tags       |
| `--blue-gray`   | `#91AFC6` | bordas, ícones               |
| `--blue-deep`   | `#6F8FA8` | botões primários             |
| `--blue-ink`    | `#4F6B82` | títulos                      |
| `--bear-fur`    | `#C7AD8F` | ursinho, elementos quentes   |
| `--bear-fur-dark` | `#AD8E6E` | sombras do ursinho         |
| `--bear-snout`  | `#F4EADB` | focinho, cartões             |
| `--beige`       | `#D8C5AE` | divisores                    |
| `--brown-ink`   | `#4A3B30` | texto principal              |
| `--brown-soft`  | `#806E5D` | texto secundário             |

## 3. Estrutura da página (ordem das seções)

1. **Hero (`#inicio`)** — nome "Cassiel", frase curta de boas-vindas, ursinho
   ilustrado, data/hora/local em pílulas com ícone, botão "Ver presentes".
2. **Sugestão/Recado** — texto carinhoso da família explicando como funciona
   a lista (escolher item → reservar → levar no dia).
3. **Fraldas (`#fraldas`)** — cards por tamanho (P, M, G) com contador
   "faltam X de Y", botão "Quero levar". Fraldas são o presente mais útil,
   então ganham destaque próprio.
4. **Presentes (`#presentes`)** — grade de cards com filtro por categoria
   (Higiene, Roupinhas, Alimentação, Cuidados, Quarto, Outros). Card mostra
   ícone/foto, nome, descrição, preço opcional, link da loja e botão de reserva.
   Item reservado fica esmaecido com selo "Escolhido".
5. **Sobre (`#sobre`)** — quem são os papais, uma foto, mensagem de agradecimento.
6. **Rodapé** — endereço com link para o mapa, contato por WhatsApp, "feito com ❤".

## 4. Interações

- Menu fixo no topo com âncoras; vira hambúrguer no mobile.
- Modal de reserva: nome do convidado + confirmação → estado de sucesso com
  confete/estrelinhas. Nunca `alert()`.
- Rolagem suave entre seções.
- Animações leves de entrada (fade + subida de 12px) nos cards.
- Botão flutuante "Confirmar presença" (WhatsApp) sempre visível no mobile.

## 5. Mobile-first (obrigatório)

- Layout em 1 coluna até 768px; grade de presentes `1 → 2 → 3` colunas.
- Botões com no mínimo 44×44px; inputs com 16px para não dar zoom no iOS.
- Modal com `max-width: 95vw`.
- Testar em 375px (iPhone SE) e 768px (iPad Mini).

## 6. Referências de estilo (buscar por)

- "baby shower website teddy bear pastel"
- "convite chá de bebê ursinho azul bege"
- "gift registry landing page minimal"
- Sites de lista de presente: Lista Perfeita, Sonho de Criança, Amazon Registry.

## 7. Próximos passos

- [ ] Preencher `EXTERNAL_LINKS.listaCompleta` e os `externalUrl` dos itens.
- [ ] Trocar ícones por fotos reais (`imageUrl`).
- [ ] Definir data, horário e endereço definitivos no hero.
- [ ] Decidir onde as reservas ficam salvas (hoje é só estado local no JSX).
- [ ] Publicar (Vercel/Netlify) e gerar link curto para o convite.
