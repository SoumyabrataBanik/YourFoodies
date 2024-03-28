"use server";

const shareMeal = async (formData: FormData) => {
  
  const meal = {
    id: Number(formData.get("id")),
    title: formData?.get("title"),
    summary: formData?.get("summary"),
    creator: formData?.get("name"),
    creator_email: formData?.get("email"),
    instructions: formData?.get("instructions"),
    image: formData?.get("imagePicker"),
  }

  console.log(meal);
}

export default shareMeal;