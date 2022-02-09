import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

const sno = () => {
  const router = useRouter();
  const { sno } = router.query;
  return (
    <>
      <Head>
        <title>This is sno</title>
      </Head>
      <div>
        This is the page number you put in the url that means quary...{sno}
      </div>
    </>
  );
};

export default sno;
