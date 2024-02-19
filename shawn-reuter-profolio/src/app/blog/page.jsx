import getPost from "../../lib/helper";

const BlogPage = () => {
  getPost(2).then((res) => console.log(res));
  return (
    <div>
      <h2>Hello this is the Blog Page</h2>
    </div>
  );
};

export default BlogPage;
