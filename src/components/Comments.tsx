// This is a comment in TypeScript/React code. It will not be executed.
// To install a package, you should run this command in your terminal:

import Giscus from "@giscus/react";

const id = "inject-comments";

const Comments = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id={id}>
      {mounted ? (
        <Giscus
          id={id}
          repo="[ENTER REPO HERE]"
          repoId="[ENTER REPO ID HERE]"
          category="[ENTER CATEGORY HERE]"
          categoryId="[ENTER CATEGORY ID HERE]"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          lang="en"
          loading="lazy"
        />
      ) : null}
    </div>
  );
};

export default Comments;