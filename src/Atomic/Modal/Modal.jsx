import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { css } from '@emotion/react';
import { CSSTransition } from 'react-transition-group';

/**
 * Modal 컴포넌트는 브라우저의 기본 팝업을 대신합니다.
 *
 * Header, Content, Footer를 조합하여 다양한 모양의 렌더링이 가능합니다.
 */
const Modal = ({ isOpen, onClickBg, closeIcon, onClickIcon, width, header, content, footer, bgStyle, modalStyle }) => {
  return (
    <CSSTransition in={isOpen} timeout={100} classNames="modal" unmountOnExit>
      <>
        <div
          css={[overlayStyle, bgStyle]}
          onClick={onClickBg}
          onKeyDown={onClickBg}
          role="button"
          tabIndex={0}
        />
        <div css={[mainStyle, modalStyle]}>
          <div css={[headerStyle, { width }]}>
            <div>{header}</div>
            {closeIcon ? (
              <div
                css={iconStyle}
                onClick={onClickIcon}
                onKeyDown={onClickIcon}
                role="button"
                tabIndex={0}
              >
                <FontAwesomeIcon icon={faTimes} size="sm" />
              </div>
            ) : (
              ""
            )}
          </div>
          {content ? (
            <div css={contentStyle}>{content}</div>
          ) : (
            ""
          )}
          {footer ? (
            <div css={footerStyle}>{footer}</div>
          ) : (
            ""
          )}
        </div>
      </>
    </CSSTransition>
  );
};

Modal.propTypes = {
  /**
   * Modal의 표시/비표시 상태를 설정합니다.
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Modal 백그라운드 클릭 시 이벤트를 설정합니다.
   */
  onClickBg: PropTypes.func,
  /**
   * Modal의 닫기 아이콘 표시 여부를 설정합니다.
   */
  closeIcon: PropTypes.bool.isRequired,
  /**
   * Modal의 닫기 아이콘 클릭 시 이벤트를 설정합니다.
   *
   * closeIcon이 True인 경우에만 유효합니다.
   */
  onClickIcon: PropTypes.func,
  /**
   * Modal의 너비를 설정합니다.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Modal의 Header 부분에 표시할 내용을 설정합니다.
   */
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Modal의 Body 부분에 표시할 내용을 설정합니다.
   */
  content: PropTypes.node,
  /**
   * Modal의 Footer 부분에 표시할 내용을 설정합니다.
   */
  footer: PropTypes.node,
  /**
   * Modal의 백그라운드 스타일을 설정합니다.
   */
  bgStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * Modal의 Header, Body, Footer 스타일을 설정합니다.
   */
  modalStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
Modal.defaultProps = {
  header: 'header',
  content: 'content',
  footer: 'footer',
};

const overlayStyle = css`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  outline: none;
`;

const mainStyle = css`
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  min-width: 400px;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26);
  & > div {
    padding: 1rem;
  }
`;

const headerStyle = css`
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
`;

const contentStyle = css`
  & > div + div {
    margin-top: 1rem;
  }
`;

const footerStyle = css`
  border-top: 1px solid #f0f0f0;
`;

const iconStyle = css`
  outline: none;
  cursor: pointer;
  transition: color 0.2s;
  & {
    svg {
      color: #bfbfbf;
    }
    svg,
    path {
      cursor: pointer;
    }
  }
  &:hover {
    svg {
      color: #7b7b7b;
    }
  }
`;

export default Modal;
