import Repo from "@/app/about/components/Repo";
import RepoDirs from "@/app/about/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  console.log(name);
  return (
    <div>
      <Link href={"/projects"}>Back</Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
