import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import BranchDetailsHeader from "../features/branchDetails/component/branchDetailsHeader";
import BranchDetailsMain from "../features/branchDetails/component/branchDetailsMain";
import MoreBranches from "../features/branchDetails/component/MoreBranches";
import { useFetchBranchById } from "../features/branchDetails/hook/useFetchBranchById";
import { useFetchBranchesGrid } from "../features/ourBranches/hook/useFetchBranchesPage";
import { HelmetProvider } from "react-helmet-async";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";

const BranchDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const {
    data: branchDetailsData,
    isLoading: branchDetailsDataLoading,
    error: branchDetailsDataError,
  } = useFetchBranchById(id);

  const {
    data: branchesData,
    isLoading: branchesDataLoading,
    error: branchesDataError,
  } = useFetchBranchesGrid();

  const isLoading = branchDetailsDataLoading || branchesDataLoading;

  // ✅ Force scroll reset whenever id changes OR loading finishes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [id, isLoading, location.key]);
  if (branchDetailsDataError || branchesDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <ScrollToTop />

      {isLoading ? (
        <Loader />
      ) : (
        <HelmetProvider>
          <MetaHelmet
            title={branchDetailsData?.data?.name}
            description={branchDetailsData?.data?.name}
          />
          <div className="container1 mx-auto">
            <BranchDetailsHeader branchDetailsData={branchDetailsData} />
            <BranchDetailsMain branchDetailsData={branchDetailsData} />
          </div>
          <MoreBranches branchesData={branchesData} />
        </HelmetProvider>
      )}
    </div>
  );
};

export default BranchDetails;
