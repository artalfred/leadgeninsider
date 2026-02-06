"use client";

export default function TermsOfService() {
  return (
    <div className="max-w-7xl mx-auto space-y-4 2xl:px-40 lg:px-30 md:px-20 sm:px-4 px-4 2xl:mt-60 md:mt-40 sm:mt-40 mt-40">
      <div className="grid 2xl:gap-2 md:gap-0 sm:gap-0 gap-0">
        <div className="flex gap-4 items-center">
          <h1 className="text-white text-start leading-normal font-medium 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl text-3xl">
            Terms of Service
          </h1>

          <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-2 md:mt-2 sm:mt-2 mt-2">
            <div className="h-0.5 bg-green-600 2xl:w-25 md:w-20 w-15"></div>
            <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-6"></div>
          </div>
        </div>
        <h1 className="text-white mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-start 2xl:w-240 md:w-full w-full">
          Effective Date: December 05, 2025
        </h1>
      </div>
      <div className="rounded-2xl pt-2 px-8 bg-slate-600/20 w-fit mt-10">
        <div className="grid gap-2 py-6 border-b-2 border-b-gray-500">
          <p className="text-white">
            Welcome to LeadGenInsider. By accessing our website
            (leadgeninsider.co) and using our services, you agree to comply with
            and be bound by the following terms and conditions.
          </p>
        </div>
        <div className="grid gap-2 py-6 border-b-2 border-b-gray-500">
          <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-start 2xl:w-240 md:w-full w-full font-medium text-white">
            1. Services Provided
          </h1>
          <p className="text-gray-300">
            LeadGenInsider provides email infrastructure services, including:
          </p>

          <ul className="m-6 grid gap-4">
            <li className="list-disc text-gray-300">
              Automated subdomain creation and DNS configuration.
            </li>
            <li className="list-disc text-gray-300">
              Inbox setup and scaling strategies.
            </li>
            <li className="list-disc text-gray-300">
              Monthly inbox management and reputation monitoring.
            </li>
            <li className="list-disc text-gray-300">
              Web development (WordPress/Framer).
            </li>
            <li className="list-disc text-gray-300">
              Managed campaign partnerships.
            </li>
          </ul>
        </div>
        <div className="grid gap-2 py-6 border-b-2 border-b-gray-500">
          <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-start 2xl:w-240 md:w-full w-full font-medium text-white">
            2. Client Responsibilities
          </h1>
          <p className="text-gray-300">
            To ensure a successful setup, clients agree to:
          </p>

          <ul className="m-6 grid gap-4">
            <li className="list-disc text-gray-300">
              <span className="text-gray-200 font-medium ">
                Authorization: &nbsp;
              </span>
              Provide the necessary access to domain registrars and DNS
              providers required for infrastructure setup.
            </li>
            <li className="list-disc text-gray-300">
              <span className="text-gray-200 font-medium">
                Compliance: &nbsp;
              </span>
              Use the provided infrastructure in accordance with international
              anti-spam laws (e.g., CAN-SPAM Act, GDPR).
            </li>
            <li className="list-disc text-gray-300">
              <span className="text-gray-200 font-medium">Content: &nbsp;</span>
              Ensure that the content sent through the provided inboxes is legal
              and non-fraudulent.
            </li>
          </ul>
        </div>
        <div className="grid gap-2 py-6 border-b-2 border-b-gray-500">
          <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-start 2xl:w-240 md:w-full w-full font-medium text-white">
            3. Deliverability Disclaimer
          </h1>
          <p className="text-gray-300">
            LeadGenInsider provides the architecture for high-volume outreach.
            While we use &quot;Deliverability-first&quot; strategies:
          </p>

          <ul className="m-6 grid gap-4">
            <li className="list-disc text-gray-300">
              We do not guarantee specific open rates, click rates, or reply
              rates, as these depend on the client&apos;s lead lists and script
              quality.
            </li>
            <li className="list-disc text-gray-300">
              We are not responsible for domains &quot;burning&quot; or being
              blacklisted due to aggressive sending patterns or poor-quality
              lead data provided by the client.
            </li>
          </ul>
        </div>
        <div className="grid gap-2 py-6 border-b-2 border-b-gray-500">
          <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-start 2xl:w-240 md:w-full w-full font-medium text-white">
            4. Payment and Subscriptions
          </h1>
          <p className="text-gray-300">
            We may use third-party tools to facilitate our services:
          </p>

          <ul className="m-6 grid gap-4">
            <li className="list-disc text-gray-400">
              <span className="text-gray-200 font-medium">
                Setup Fees: &nbsp;
              </span>
              Fees for &quot;Full Subdomain & Inbox Setup&quot; are due prior to
              the commencement of work.
            </li>
            <li className="list-disc text-gray-400">
              <span className="text-gray-200 font-medium">
                Monthly Management: &nbsp;
              </span>
              Subscriptions for &quot;Inbox Management&quot; are billed monthly.
              Cancellation requires a 14-day notice prior to the next billing
              cycle.
            </li>
            <li className="list-disc text-gray-400">
              <span className="text-gray-200 font-medium">Refunds: &nbsp;</span>
              Due to the manual and technical nature of DNS and infrastructure
              work, refunds are generally not provided once the setup process
              has begun.
            </li>
          </ul>
        </div>
        <div className="grid gap-2 py-6 border-b-2 border-b-gray-500">
          <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-start 2xl:w-240 md:w-full w-full font-medium text-white">
            5. Intellectual Property
          </h1>
          <p className="text-gray-300">
            All automation scripts, proprietary setup methodologies, and
            custom-built infrastructure logic remain the intellectual property
            of LeadGenInsider. The client is granted a license to use this
            infrastructure for the duration of the service.
          </p>
        </div>
        <div className="grid gap-2 py-6 border-b-2 border-b-gray-500">
          <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-start 2xl:w-240 md:w-full w-full font-medium text-white">
            6. Limitation of Liability
          </h1>
          <p className="text-gray-300">
            LeadGenInsider shall not be held liable for any loss of business,
            revenue, or data resulting from:
          </p>

          <ul className="m-6 grid gap-4">
            <li className="list-disc text-gray-400">
              Technical outages from third-party providers (Smartlead, Bison,
              Google, Outlook, etc.).
            </li>
            <li className="list-disc text-gray-400">
              Suspension of domains by registrars due to client sending
              practices.
            </li>
            <li className="list-disc text-gray-400">
              <span className="text-gray-300">Address: </span>
              Quezon City, Metro Manila, Philippines
            </li>
          </ul>
        </div>
        <div className="grid gap-2 py-6 border-b-2 border-b-gray-500">
          <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-start 2xl:w-240 md:w-full w-full font-medium text-white">
            7. Term and Termination
          </h1>
          <p className="text-gray-400">
            We reserve the right to terminate services if a client engages in
            illegal activities or violates these terms. Upon termination, access
            to the managed infrastructure may be revoked.
          </p>
        </div>
        <div className="grid gap-2 py-6 border-b-2 border-b-gray-500">
          <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-start 2xl:w-240 md:w-full w-full font-medium text-white">
            8. Governing Law
          </h1>
          <p className="text-gray-400">
            These terms are governed by the laws of the Republic of the
            Philippines, without regard to its conflict of law principles.
          </p>
        </div>
        <div className="grid gap-2 py-6">
          <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-start 2xl:w-240 md:w-full w-full font-medium text-white">
            9. Contact Information
          </h1>
          <p className="text-gray-300">
            For questions regarding these Terms, please contact:
          </p>
          <ul className="m-6 grid gap-4">
            <li className="list-disc text-gray-400">
              <span className="text-gray-200">Email: </span>
              info@leadgeninsider.co
            </li>
            <li className="list-disc text-gray-400">
              <span className="text-gray-200">Phone: </span> +63 967 134 8488
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
