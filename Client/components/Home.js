import React, { Component } from "react";
import styled from "styled-components";
import { H1, H4, ButtonAscent, H2, H3 } from "../Shared/style";
import imgSrc from "../assets/email.jpg";
import emaildetailImg from "../assets/email_marketing_plants_desktop.jpg";
import onlineStoreImg from "../assets/online_stores_gems_desktop.jpg";
import socialImage from "../assets/social_marketing_food_desktop.jpg";
import Footer from './Footer'
const Wrapper = styled.div`
  display: flex;
  padding-top: 100px;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  .left-section {
    width: 40%;
    @media (max-width: 480px) {
      width: 100%;
    }
    H1 {
      max-width: 400px;
      font-size: 3.5rem;
      padding-top: 100px;
      @media (max-width: 480px) {
        font-size: 2rem;
        padding-top: 20px;
      }
    }
    H4 {
      max-width: 450px;
      border-left: 3px solid ${(props) => props.theme.$orange};
      padding-left: 20px;
      margin-top: 20px;
    }
  }
  .right-section {
    padding-left: 20px;
    @media (max-width: 480px) {
      width: 100%;
    }
    width: 60%;
    img {
      width: 100%;
      max-width: 650px;
      padding-top: 50px;
      @media (max-width: 480px) {
        padding-top: 20px;
      }
    }
  }
`;

const WhyDigim = styled.div`
  width: 100%;
  margin: 100px 0;
  H2 {
    font-size: 2rem;
    span {
      color: ${(props) => props.theme.$mainBlue};
    }
  }
  H4 {
    padding-top: 10px;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 10px;
  .contents {
    text-align: center;
    H3 {
      padding-top: 15px;
    }
    i {
      color: ${(props) => props.theme.$mainBlue};
    }
  }
`;

const FeatureDetail = styled.div`
  margin: 50px 0;
  padding: 50px 0;
  background-color: ${(props) => props.theme.$lightGrey};
  .featureDetail-wrapper {
    display: flex;
    .leftSection,
    .rightSection {
      width: 50%;
      padding: 0 20px;
    }
    img {
      width: 100%;
    }
    @media (max-width: 767px) {
      flex-direction: column;
      .leftSection {
        width: 100%;
      }
      .rightSection {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    H4 {
      line-height: 1.8;
      padding-top: 15px;
    }
    H3 {
      font-size: 1.2rem;
      color: ${(props) => props.theme.$buttonBlue};
    }
  }
`;
const StoreDetail = styled.div`
  .wrapper {
    display: flex;
    .leftSection,
    .rightSection {
      width: 50%;
      padding: 0 20px;
    }
    img {
      width: 100%;
    }
    @media (max-width: 767px) {
      flex-direction: column;
      .leftSection {
        width: 100%;
        img {
          width: 100%;
        }
        order: 2;
      }
      .rightSection {
        width: 100%;
        order: 1;
      }
    }
    H3 {
      font-size: 1.2rem;
      color: ${(props) => props.theme.$buttonBlue};
    }
  }
`;
const GrowWebsite = styled.div`
  H2 {
    font-size: 3rem;
    color: ${(props) => props.theme.$buttonBlue};
    max-width: 300px;
    position: relative;
    top: 50%;
    transform: translateY(-60%);
  }
  ul {
    li {
      list-style-type: none;
    }
    H3 {
      color: ${(props) => props.theme.$buttonBlue};
    }
  }
`;
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Wrapper>
            <div className="left-section">
              <H1>Prepare for take off</H1>
              <H4>
                Digim helps small businesses do big things, with the right tools
                and guidance every step of the way.
              </H4>
              <ButtonAscent>Take a free test drive</ButtonAscent>
            </div>
            <div className="right-section">
              <img src={imgSrc} alt="" />
            </div>
          </Wrapper>
        </div>
        <div className="container">
          <WhyDigim>
            <H2>Why digim?</H2>
            <H2>
              <span>Because its just a smart business move</span>
            </H2>
            <H4>
              Whether you’re launching an email marketing campaign to engage
              customers, building an awesome website in minutes, uploading
              products to your online store, generating awareness on social
              media, or boosting sales with Google Ads, we have all the tools
              and guidance you need to achieve the results you want, all in one
              place.
            </H4>
          </WhyDigim>
        </div>
        <div className="container">
          <Features>
            <div className="contents">
              <i className="fa fa-envelope fa-4x"></i>
              <H3>Email Marketing</H3>
              <H4>
                Grow your brand by reaching people where they go every day:
                their inbox.
              </H4>
            </div>
            <div className="contents">
              <i className="fa fa-store fa-4x"></i>
              <H3>Ecommerce Store </H3>
              <H4>
                Set up an online store in no time and start selling your digital
                or physical goods fast.
              </H4>
            </div>
            <div className="contents">
              <i className="fa fa-user fa-4x"></i>
              <H3>Social Media Merketing</H3>
              <H4>
                Use Facebook and Instagram ads to bring new leads to your
                website.
              </H4>
            </div>
          </Features>
        </div>
        <FeatureDetail>
          <div className="container">
            <div className="featureDetail-wrapper">
              <div className="leftSection">
                <H3>Email Marketing</H3>
                <H2>Communicate Smarter</H2>
                <H4>
                  Have something to say or sell? Constant Contact’s email
                  marketing tools make it easy to stand out while you get the
                  word out. Use our free Email Template Builder or browse
                  hundreds of mobile-optimized templates for every purpose—from
                  promoting a sale to launching a new product. Customize as much
                  as you want with our easy-to-use editing tools. Then track
                  your success with real-time reporting and robust analytics.
                </H4>
                <ButtonAscent>Learn More</ButtonAscent>
              </div>
              <div className="rightSection">
                <img src={emaildetailImg} alt=""  />
              </div>
            </div>
          </div>
        </FeatureDetail>
        <StoreDetail>
          <div className="container">
            <div className="wrapper">
              <div className="leftSection">
                <img src={onlineStoreImg} alt="" />
              </div>
              <div className="rightSection">
                <H3>Online Store</H3>
                <H2>Sell Smarter</H2>
                <H4>
                  What’s free to set up, open 24 hours a day, and can be seen
                  around the world? You guessed it. Whether you’re a mom-and-pop
                  or an upstart, moving your business online or launching a
                  standalone store, selling physical or digital products,
                  Constant Contact’s powerful ecommerce platform ensures your
                  customers will have a great shopping experience on any device.
                </H4>
                <ButtonAscent>Learn More</ButtonAscent>
              </div>
            </div>
          </div>
        </StoreDetail>
        <FeatureDetail>
          <div className="container">
            <div className="featureDetail-wrapper">
              <div className="leftSection">
                <H3>Social Marketing</H3>
                <H2>Connect Smarter</H2>
                <H4>
                  Easily create Facebook and Instagram ad campaigns that drive
                  traffic to your website, promote list growth, and generate
                  awareness for your business—all directly from your account.
                </H4>
                <ButtonAscent>Learn More</ButtonAscent>
              </div>
              <div className="rightSection">
                <img src={socialImage} alt="" />
              </div>
            </div>
          </div>
        </FeatureDetail>
        <GrowWebsite>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <H2>4 Easy Ways To Grow Your Business</H2>
              </div>
              <div className="col-md-6">
                <ul className="steps">
                  <li>
                    <H3>1. Set Up online Store </H3>
                    <p>
                      Do you have your own store if yes its ok if no we can help
                      you set up one
                    </p>
                  </li>
                  <li>
                    <H3>2. Help People Find you </H3>
                    <p>
                      Digim helps you spread the word through email, social
                      media, SEO and other forms of online marketing⁠—all from
                      one place
                    </p>
                  </li>
                  <li>
                    <H3>3. Use email to boost loyalty.</H3>
                    <p>
                      With email marketing tools like ours, you can segment
                      subscribers based on different criteria and send them
                      content they'll want to open.
                    </p>
                  </li>
                  <li>
                    <H3>4. Track your performance.</H3>
                    <p>
                      Constant Contact's analytic tool gives you detailed
                      visitor metrics in real time⁠—allowing you to quickly
                      identify and pounce on trends.
                    </p>
                  </li>
                  <ButtonAscent>Get Started</ButtonAscent>
                </ul>
              </div>
            </div>
          </div>
        </GrowWebsite>
        <Footer />
      </div>
    );
  }
}
