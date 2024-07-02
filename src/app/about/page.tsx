import {
  GlobeIcon,
  LightbulbIcon,
  PackageIcon,
  QrCodeIcon,
  RecycleIcon,
  StoreIcon,
  TargetIcon,
  ThumbsUpIcon,
  TruckIcon,
} from "@/components/ui/icons";

export default function Home() {
  return (
    <div>
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">About Godavi</h2>
            <p className="text-gray-600">
              Godavi, inspired and founded by college students, is an emerging
              online e-commerce enterprise dedicated to scaling and expanding
              through strategic partnerships and the reselling of established
              brand products.{" "}
            </p>
            <p className="text-gray-600">
              Our mission is to establish Godavi as a successful and enduring
              business for generations to come, with a steadfast commitment to
              quality and customer satisfaction at the forefront of our
              expansion strategy. In addition to reselling renowned brands,
              Godavi is also in the process of developing its innovative
              products to introduce to the global marketplace.
            </p>
            <p className="text-gray-600">
              We believe in providing exceptional value, which is encapsulated
              in our slogan: “Save More. Live More.”
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <QrCodeIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-bold">Quality Assurance</h3>
              <p className="text-gray-600">
                We are committed to delivering products that meet the highest
                standards of quality and durability.
              </p>
            </div>
            <div className="space-y-4">
              <RecycleIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-bold">Sustainability</h3>
              <p className="text-gray-600">
                Our products are designed with the environment in mind, using
                eco-friendly materials and sustainable practices.
              </p>
            </div>
            <div className="space-y-4">
              <StoreIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-bold">Customer Service</h3>
              <p className="text-gray-600">
                We pride ourselves on our exceptional customer service, always
                striving to exceed our customers&apos; expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-gray-600">
              Godavi offers a wide range of services to meet your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <PackageIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-bold">
                Reselling Established Brands
              </h3>
              <p className="text-gray-600">
                We specialize in reselling established brand products to our
                customers.
              </p>
            </div>
            <div className="space-y-4">
              <LightbulbIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-bold">
                Innovative Product Development
              </h3>
              <p className="text-gray-600">
                We are developing innovative products for the global
                marketplace.
              </p>
            </div>
            <div className="space-y-4">
              <TruckIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-bold">Comprehensive Logistics</h3>
              <p className="text-gray-600">
                We provide comprehensive logistics solutions to our customers.
              </p>
            </div>
            <div className="space-y-4">
              <GlobeIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-bold">Multi-Channel Sales</h3>
              <p className="text-gray-600">
                We sell on multiple channels including Canada Walmart,
                international wholesale distribution to warehouses, and Amazon
                US.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-600">
              Godavi is committed to achieving our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <TargetIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-bold">Enduring Business</h3>
              <p className="text-gray-600">
                To establish Godavi as a successful and enduring business for
                generations to come.
              </p>
            </div>
            <div className="space-y-4">
              <ThumbsUpIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-bold">Customer Satisfaction</h3>
              <p className="text-gray-600">
                To ensure customer satisfaction and provide exceptional value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
