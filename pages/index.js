import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Política de Privacidade / Privacy Policy</title>
      </Head>

      <main>
        <Header title="Política de Privacidade / Privacy Policy" />

        <h2>[Português]</h2>
        <p>
          Este aplicativo de jogo da velha não coleta, armazena ou compartilha
          dados pessoais dos usuários.
        </p>
        <p>
          O aplicativo pode exibir anúncios por meio de redes de publicidade de
          terceiros (como o Google AdMob), que podem coletar informações
          anônimas, como identificadores de dispositivo e idioma, para exibir
          anúncios relevantes.
        </p>
        <p>
          Não temos acesso a esses dados e não fazemos uso direto de nenhuma
          informação pessoal.
        </p>
        <p>
          Este aplicativo é adequado para todas as idades. Recomendamos ativar
          o controle parental no dispositivo, caso queira restringir anúncios.
        </p>
        <p>
          Podemos atualizar esta política de privacidade no futuro. Mudanças
          serão publicadas nesta mesma página.
        </p>
        <p>
          Em caso de dúvidas ou sugestões, entre em contato pelo e-mail:{" "}
          <a href="mailto:emersonmelomartins1@gmail.com">
            emersonmelomartins1@gmail.com
          </a>
        </p>

        <hr />

        <h2>[English]</h2>
        <p>
          This tic-tac-toe app does not collect, store, or share any personal
          user data.
        </p>
        <p>
          The app may display ads through third-party ad networks (like Google
          AdMob), which may collect anonymous information such as device
          identifiers and language to show relevant ads.
        </p>
        <p>
          We do not access or directly use any personal information from users.
        </p>
        <p>
          This app is suitable for all ages. If desired, enable parental
          controls to restrict ads on your device.
        </p>
        <p>
          We may update this privacy policy in the future. Any changes will be
          posted on this same page.
        </p>
        <p>
          For questions or suggestions, contact us at:{" "}
          <a href="mailto:emersonmelomartins1@gmail.com">
            emersonmelomartins1@gmail.com
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
}
