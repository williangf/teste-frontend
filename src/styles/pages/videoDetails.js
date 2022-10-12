import styled from "styled-components";

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .top-container {
    position: absolute;
    top: 132px;
    left: 12px;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .details-container {
    width: 100%;
    max-width: 780px;
    padding: 12px;

    .video-title {
      background-color: ${({ theme }) => theme.colors.lighter};
      font-size: 20px;
      padding: 12px;
      border-radius: 8px 8px 0px 0px;
    }

    .iframe-container {
      position: relative;
      padding-bottom: 56.25%;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .bottom-container {
      background-color: ${({ theme }) => theme.colors.lighter};
      padding: 12px;
      border-radius: 0px 0px 8px 8px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

      .main-details {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0px;
        margin-bottom: 24px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);

        .channel-name {
          font-size: 20px;
        }

        .video-likes {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      }

      .description {
        padding-bottom: 12px;
        margin-bottom: 12px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
      }

      .video-views {
        font-weight: 300;
      }
    }
  }
`;
