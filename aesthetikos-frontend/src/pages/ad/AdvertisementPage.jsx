import { useParams } from "react-router-dom";
import Loading from "../../components/shared/Loading";
import { AdFormProvider } from "../../context/adFormContext/adFormContext";
import useGetAProduct from "../../hooks/phones/useGetAProduct";
import AdPreview from "./AdPreview";
import GiveAnAd from "./GiveAnAd";
// import GiveAnAd from "./GiveAnAd";

export default function AdvertisementPage() {
  const { id } = useParams();
  const { product, productLoading } = useGetAProduct(id);
  const { adWillEnd, adCreated } = product || {};
  const ad = new Date(adWillEnd) > new Date(adCreated);

  return (
    <AdFormProvider id={id}>
      <Loading visible={productLoading} />
      {ad ? <AdPreview product={product} /> : <GiveAnAd />}
    </AdFormProvider>
  );
}
