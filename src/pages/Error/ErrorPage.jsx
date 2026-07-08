import { Link, useRouteError } from "react-router";
import { Home, AlertTriangle, ArrowLeft } from "lucide-react";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();

  const isNotFound = error?.status === 404;
  const errorMessage = isNotFound
    ? "The page you're looking for doesn't exist."
    : "Something went wrong. Please try again.";

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <div className={styles.iconWrapper}>
          <AlertTriangle className={styles.errorIcon} size={80} />
        </div>

        <h1 className={styles.errorCode}>{isNotFound ? "404" : "500"}</h1>

        <h2 className={styles.errorTitle}>
          {isNotFound ? "Page Not Found" : "Server Error"}
        </h2>

        <p className={styles.errorMessage}>{errorMessage}</p>

        {error?.data && <p className={styles.errorDetails}>{error.data}</p>}

        <div className={styles.buttonGroup}>
          <Link to="/" className={styles.primaryBtn}>
            <Home size={20} />
            Go Home
          </Link>

          <button
            className={styles.secondaryBtn}
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>

      <div className={styles.brandFooter}>
        <p>Tha Suavepreneur</p>
        <span>Modest Outfits | Made to Measure</span>
      </div>
    </div>
  );
};

export default ErrorPage;
