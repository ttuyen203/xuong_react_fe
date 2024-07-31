import { styled } from "@mui/system";

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

const ListShop = styled("div")({
  paddingTop: "2rem",
});

const Row = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "2.8rem",
  gap: "4rem",
});

const Col = styled("div")({
  flex: "1",
});

const ImgShop = styled("img")({
  width: "100%       ",
});

const Shop = () => {
  return (
    <Section>
      <SectionTitle>Shop</SectionTitle>
      <SectionContent>
        <ListShop>
          <Row>
            <Col>
              <ImgShop
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956278/NNShop/shop1_uiqkxf.png"
                alt=""
              />
            </Col>
            <Col>
              <ImgShop
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956286/NNShop/shop2_oxxhfj.png"
                alt=""
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ImgShop
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956282/NNShop/shop3_eqwlvh.png"
                alt=""
              />
            </Col>
            <Col>
              <ImgShop
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956293/NNShop/shop4_pvudfs.png"
                alt=""
              />
            </Col>
          </Row>
        </ListShop>
      </SectionContent>
    </Section>
  );
};

export default Shop;
