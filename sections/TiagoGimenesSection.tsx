import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The name of the person.
   */
  name?: string;
  /**
   * @description The title of the person.
   */
  title?: string;
  /**
   * @description The description of the person.
   * @format textarea
   */
  description?: string;
  /**
   * @description The profile image of the person.
   */
  profileImage?: ImageWidget;
}

export default function AboutSection({ name = "Tiago Gimenes", title = "Software Engineer", description = "Tiago Gimenes is a skilled software engineer with expertise in web development. He creates robust and scalable applications using modern technologies.", profileImage }: Props) {
  return (
    <section class="bg-white py-12">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        {profileImage && (
          <div class="md:w-1/3 mb-8 md:mb-0">
            <img src={profileImage} alt={name} class="rounded-full w-48 h-48 object-cover mx-auto" />
          </div>
        )}
        <div class="md:w-2/3 text-center md:text-left">
          <h2 class="text-4xl font-bold mb-4">{name}</h2>
          <h3 class="text-2xl font-semibold text-gray-600 mb-4">{title}</h3>
          <p class="text-lg text-gray-700">{description}</p>
        </div>
      </div>
    </section>
  )
}