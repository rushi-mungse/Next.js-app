import { useRouter } from "next/router";

const sno = () => {
  const router = useRouter();
  const { sno } = router.query;
  return (
    <div>
      This is the page number you put in the url that means quary...{sno}
    </div>
  );
};

export default sno;
