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
        <p className="description">
          <strong>[Português]</strong> Este é um jogo da velha simples. Não
          coletamos, armazenamos ou compartilhamos nenhum dado pessoal dos
          usuários.
        </p>
        <p>
          O jogo pode exibir anúncios, mas nenhuma informação sua é obtida ou
          utilizada para isso.
        </p>
        <p>Se tiver dúvidas, entre em contato conosco.</p>
        <hr />
        <p className="description">
          <strong>[English]</strong> This is a simple tic-tac-toe game. We do
          not collect, store, or share any personal user data.
        </p>
        <p>
          The game may display ads, but none of your information is obtained or
          used for this.
        </p>
        <p>If you have any questions, please contact us.</p>
      </main>

      <Footer />
    </div>
  );
}
