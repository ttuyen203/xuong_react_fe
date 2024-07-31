import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Section = styled("section")({
  paddingTop: "4rem",
  paddingLeft: "8rem",
  paddingRight: "8rem",
});

const SectionTitle = styled("div")({
  fontSize: "1.8rem",
  fontWeight: 500,
  paddingTop: "2rem",
  paddingBottom: "1rem",
});

const SectionContent = styled("div")({
  borderTop: "2px solid #000",
});

const ListBlog = styled("div")({
  paddingTop: "2rem",
});

const Row = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "2.8rem",
  gap: "4rem",
});

const ImgBlog = styled("img")({
  width: "100%",
});

const BorderBottom = styled("div")({
  borderBottom: "2px solid #000",
});

const BlogContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
});

const BlogTitle = styled("div")({
  fontSize: "1.2rem",
  fontWeight: 600,
});

const BlogText = styled("div")({
  fontSize: "1rem",
  fontWeight: 500,
  opacity: 0.6,
  marginTop: "1.5rem",
  marginBottom: "1.5rem",
  textAlign: "justify",
});

const BtnAbout = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
});

const Blog = () => {
  return (
    <Section>
      <SectionTitle>Blog</SectionTitle>
      <SectionContent>
        <ListBlog>
          <Row>
            <ImgBlog
              src="https://res.cloudinary.com/dymajn3ys/image/upload/v1720840175/blog_1_rkpyg6.png"
              alt=""
            />
            <BorderBottom>
              <BlogContent>
                <BlogTitle>THE ULTIMATE SOFA BUYING GUIDE</BlogTitle>
                <BlogText>
                  The versatility of our living space is more crucial than ever.
                  But buying a sofa might be a difficult undertaking. Your needs
                  and the size of your living area will determine everything,
                  However, don’t worry, we're here to help you.
                </BlogText>
                <BtnAbout>
                  ABOUT
                  <ArrowForwardIcon
                    sx={{ width: "20px", marginLeft: "10px" }}
                  />
                </BtnAbout>
              </BlogContent>
            </BorderBottom>
          </Row>
          <Row>
            <ImgBlog
              src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956231/NNShop/blog2_v5tqrb.png"
              alt=""
            />
            <BorderBottom>
              <BlogContent>
                <BlogTitle>A BEDROOM MUST HAVE SOMETHING LIKE THIS</BlogTitle>
                <BlogText>
                  Your level of comfort when getting into and out of bed can be
                  greatly influenced by the bed frame you choose. It may
                  significantly affect how you want your bedroom to feel and
                  look.
                </BlogText>
                <BtnAbout>
                  ABOUT
                  <ArrowForwardIcon
                    sx={{ width: "20px", marginLeft: "10px" }}
                  />
                </BtnAbout>
              </BlogContent>
            </BorderBottom>
          </Row>
          <Row>
            <ImgBlog
              src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956234/NNShop/blog3_msvgl1.png"
              alt=""
            />
            <BorderBottom>
              <BlogContent>
                <BlogTitle>WHY IS A TV CONSOLE A MUST IN EVERY HOUSE</BlogTitle>
                <BlogText>
                  People do a lot of research to make sure they purchase the
                  ideal television. And like the rest of us, you want to keep
                  that gorgeous flat screen in your living or bedroom on a table
                  or stand.
                </BlogText>
                <BtnAbout>
                  ABOUT
                  <ArrowForwardIcon
                    sx={{ width: "20px", marginLeft: "10px" }}
                  />
                </BtnAbout>
              </BlogContent>
            </BorderBottom>
          </Row>
        </ListBlog>
      </SectionContent>
    </Section>
  );
};

export default Blog;
