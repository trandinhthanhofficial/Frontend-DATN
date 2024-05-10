import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeFooter.scss";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <div class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <p class="text-justify">
                Overthinking là cái bẫy tinh tế mà ta thường tự mình mắc vào, một chiếc vòng lặp vô tận của suy nghĩ không ngừng. Khi ta bắt đầu suy tính mọi khía cạnh của một vấn đề, từ những chi tiết nhỏ nhặt đến những kịch bản tưởng tượng, ta dần mất khỏi hiện tại và bị cuốn vào mê cung của tưởng tượng và lo lắng. Thậm chí những quyết định đơn giản cũng trở nên khó khăn và phức tạp dưới áp lực của những suy nghĩ kéo dài không ngừng. Overthinking có thể là một cảm giác khó chịu, làm mất đi sự tự tin và khiến ta lạc hướng trong cuộc sống. Đôi khi, để thoát khỏi vòng xoáy này, ta cần phải học cách tin tưởng vào bản năng và giảm bớt sự phân tích quá mức, để có thể tận hưởng hiện tại và đối diện với tương lai một cách tự tin hơn.
                </p>
              </div>

              <div class="col-xs-6 col-md-3">
                <ul class="footer-links"></ul>
              </div>

              <div class="col-xs-6 col-md-3">
                <ul class="footer-links">
                  <li>
                    <b>
                    <a href="#">Chuyên khoa</a>
                    </b>
                  </li>
                  <li>
                    <b>
                    <a href="#">Cơ sở y tế</a>
                    </b>
                  </li>
                  <li>
                    <b>
                    <a href="#">Cẩm nang</a>
                    </b>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <hr></hr>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy;</p>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li>
                    <a class="facebook" href="#">
                      <i className="fab fa-facebook-f facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a class="twitter" href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a class="dribbble" href="#">
                      <i class="fab fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a class="linkedin" href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    //inject
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
