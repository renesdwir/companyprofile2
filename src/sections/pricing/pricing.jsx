import React from "react";
import {
  Button,
  ButtonWrapper,
  Card,
  CardWrapper,
  Container,
  Correct,
  List,
  ListWrapper,
  Price,
  Title,
} from "./pricing.styled";
import { Element } from "react-scroll";

const Pricing = () => {
  return (
    <Element name="pricing">
      <Container>
        <Title>Temukan paket yang sesuai dengan perusahaan Anda</Title>
        <CardWrapper>
          <Card>
            <h3>BASIC</h3>
            <ListWrapper>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>Mencatat Barang Masuk dan Keluar</div>
              </List>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>Mencatat Hasil Keuntungan</div>
              </List>
              <List>
                <div>
                  <Correct>&#10005;</Correct>
                </div>
                <div>Dapat menganalisa hasil penjualan dengan CHART</div>
              </List>
              <List>
                <div>
                  <Correct>&#10005;</Correct>
                </div>
                <div>Support 7x24 Jam</div>
              </List>
              <List>
                <div>
                  <Correct>&#10005;</Correct>
                </div>
                <div>Export data ke Excel</div>
              </List>
              <List>
                <div>
                  <Correct>&#10005;</Correct>
                </div>
                <div>AI Prediksi penghasilan</div>
              </List>
            </ListWrapper>
            <Price>
              Rp. <span>75.900</span>/bulan
            </Price>
            <ButtonWrapper>
              <Button>Pilih Paket</Button>
            </ButtonWrapper>
          </Card>

          <Card>
            <h3>BUSINESS</h3>
            <ListWrapper>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>Mencatat Barang Masuk dan Keluar</div>
              </List>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>Mencatat Hasil Keuntungan</div>
              </List>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>Dapat menganalisa hasil penjualan dengan CHART</div>
              </List>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>Support 7x24 Jam</div>
              </List>
              <List>
                <div>
                  <Correct>&#10005;</Correct>
                </div>
                <div>Export data ke Excel</div>
              </List>
              <List>
                <div>
                  <Correct>&#10005;</Correct>
                </div>
                <div>AI Prediksi penghasilan</div>
              </List>
            </ListWrapper>
            <Price>
              Rp. <span>249.900</span>/bulan
            </Price>
            <ButtonWrapper>
              <Button>Pilih Paket</Button>
            </ButtonWrapper>
          </Card>

          <Card>
            <h3>ENTREPRENEUR</h3>
            <ListWrapper>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>Mencatat Barang Masuk dan Keluar</div>
              </List>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>Mencatat Hasil Keuntungan</div>
              </List>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>Dapat menganalisa hasil penjualan dengan CHART</div>
              </List>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>Support 7x24 Jam</div>
              </List>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>Export data ke Excel</div>
              </List>
              <List>
                <div>
                  <Correct iscorrect="true">&#10003;</Correct>
                </div>
                <div>AI Prediksi penghasilan</div>
              </List>
            </ListWrapper>
            <Price>
              Rp. <span>499.900</span>/bulan
            </Price>
            <ButtonWrapper>
              <Button>Pilih Paket</Button>
            </ButtonWrapper>
          </Card>
        </CardWrapper>
      </Container>
    </Element>
  );
};

export default Pricing;
