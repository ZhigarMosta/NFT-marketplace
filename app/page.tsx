import HeroSection from "@/block/home/heroSection/heroSection";
import TrendingCollection from "@/block/home/trendingCollection/trendingCollection";
import "./home.scss";
import TopCreators from "@/block/home/topCreators/topCreators";
import BrowseCategories from "@/block/home/browseCategories/browseCategories";
import DiscoverMoreNFTs from "@/block/home/discoverMoreNFTs/discoverMoreNFTs";
import NFThighlight from "@/block/home/NFThighlight/NFThighlight";
import HowItWorks from "@/block/home/HowItWorks/howItWorks";
import SubscribeWidget from "@/block/home/subscribeWidget/subscribeWidget";
export default function Home() {
  return (
    <div className="home">
      <HeroSection />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <DiscoverMoreNFTs />
      <NFThighlight />
      <HowItWorks />
      <SubscribeWidget />
    </div>
  );
}
