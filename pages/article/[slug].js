import { useRouter } from "next/router";
const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>{slug}</h1>
    </div>
  );
};

export default slug;
