import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list41.css'

const ContentList41 = (props) => {
  return (
    <div className="content-list41-container thq-section-padding">
      <div className="content-list41-max-width thq-section-max-width thq-flex-column">
        <div className="content-list41-content2 thq-flex-column">
          <ul className="content-list41-ul1 thq-flex-column">
            <li className="content-list41-li1 thq-flex-column list-item">
              <h2 className="content-list41-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list41-text15">
                      Welcome to Verru Travels
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list41-content1 thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list41-text13">
                      Explore our exclusive tour packages to famous destinations
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
        <div className="content-list41-content3 thq-flex-column">
          <ul className="content-list41-ul2 thq-flex-column">
            <li className="content-list41-li2 thq-flex-column list-item">
              <h2 className="content-list41-heading10 thq-heading-2">
                {props.heading10 ?? (
                  <Fragment>
                    <span className="content-list41-text12">
                      PRIVACY POLICY
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list41-content10 thq-body-small">
                {props.content10 ?? (
                  <Fragment>
                    <span className="content-list41-text18">
                      At Verru Travels, we take your privacy seriously. We are
                      committed to protecting any personal information you
                      provide while using our website. Our Privacy Policy
                      outlines how we collect, use, and safeguard your data. By
                      using our services, you agree to the terms of our Privacy
                      Policy. If you have any questions or concerns about your
                      privacy when using our website, please contact us for
                      assistance.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list41-ul3 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading11 ?? (
                      <Fragment>
                        <span className="content-list41-text10">General</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content11 ?? (
                      <Fragment>
                        <span className="content-list41-text11">
                          Lorem ipsum dolor sit amet. Nam nihil facilis sit
                          consequuntur internos qui minima rerum ut molestias
                          laudantium aut iusto deserunt. Aut voluptatibus
                          excepturi qui officia laudantium est repellendus
                          tempore hic sunt debitis. Ut galisum tempore in enim
                          fugit eum pariatur possimus est tenetur nemo et sint
                          sint et dolores Quis. Aut illum perspiciatis rem
                          architecto culpa et fuga aliquid. Est omnis
                          praesentium ut nisi internos rem quod totam et
                          similique quis. Est tempore cumque aut recusandae
                          labore qui error molestiae et possimus quia! Eum Quis
                          asperiores non nihil tempora qui quia voluptatem aut
                          aspernatur aspernatur aut asperiores labore et
                          sapiente quaerat qui suscipit quia. Ea nesciunt iste
                          aut temporibus culpa sit dignissimos quaerat eum
                          architecto voluptatum et nemo velit At harum harum.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading12 ?? (
                      <Fragment>
                        <span className="content-list41-text19">
                          Damages and issues
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content12 ?? (
                      <Fragment>
                        <span className="content-list41-text14">
                          At Verru Travels, we take your privacy seriously. We
                          are committed to protecting the personal information
                          you provide when using our website. Our Privacy Policy
                          outlines how we collect, use, and safeguard your data.
                          By booking a trip with us, you agree to our terms and
                          conditions regarding the handling of your information.
                          If you have any questions or concerns about your
                          privacy, please don&apos;t hesitate to contact us.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading13 ?? (
                      <Fragment>
                        <span className="content-list41-text17">Refunds</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content13 ?? (
                      <Fragment>
                        <span className="content-list41-text16">
                          Lorem ipsum dolor sit amet. Est vitae blanditiis ab
                          aliquam tempore aut ipsam iusto in sunt repellat ex
                          voluptatum inventore ab facilis galisum ea consequatur
                          consequuntur. Ab voluptas voluptatem eum consequatur
                          aspernatur non laboriosam atque est labore asperiores
                          a neque quos. Ea nemo modi hic dicta saepe et
                          veritatis maiores At praesentium aliquid. Sed dolores
                          architecto non doloribus quia eos consectetur commodi
                          non tenetur vitae est neque omnis. Non perspiciatis
                          velit At aliquam rerum ut officiis ipsa id minima eius
                          ut sapiente nobis et nemo neque. Aut maiores tempora
                          in officiis sunt eum voluptatem tenetur sit iste
                          reprehenderit ea nisi dolor. Ea impedit omnis ad
                          internos autem ut esse sunt ad saepe maiores vel
                          perferendis veritatis. Ex magni fugiat ut
                          reprehenderit laudantium sit galisum ipsam eos tempora
                          doloribus sed accusantium nobis eum praesentium quod.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList41.defaultProps = {
  heading11: undefined,
  content11: undefined,
  heading10: undefined,
  content1: undefined,
  content12: undefined,
  heading1: undefined,
  content13: undefined,
  heading13: undefined,
  content10: undefined,
  heading12: undefined,
}

ContentList41.propTypes = {
  heading11: PropTypes.element,
  content11: PropTypes.element,
  heading10: PropTypes.element,
  content1: PropTypes.element,
  content12: PropTypes.element,
  heading1: PropTypes.element,
  content13: PropTypes.element,
  heading13: PropTypes.element,
  content10: PropTypes.element,
  heading12: PropTypes.element,
}

export default ContentList41
