import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "sourav.seal1999@gmail.com",
    href: "mailto:sourav.seal1999@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6296822691",
    href: "tel:+916296822691",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, India",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/sourav-seal",
    href: "https://linkedin.com/in/sourav-seal",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "souravseal99",
    href: "https://github.com/souravseal99",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Contact
        </h2>
        {/* Gradient accent */}
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            const content = (
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {contact.label}
                  </p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    {contact.value}
                  </p>
                </div>
              </div>
            );

            return (
              <div key={index}>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>

        <Separator className="mt-12" />
      </div>
    </section>
  );
}
