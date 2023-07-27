export const dynamic = "force-dynamic";
import SubmitButton from "@/Components/SubmitButton";
import { db } from "@/app/db";
import { revalidatePath } from "next/cache";

async function getData(id: string) {
  const data = await db.comments.findMany({
    where: {
      movieId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

async function postData(formData: FormData) {
  "use server";

  const data = await db.comments.create({
    data: {
      message: formData.get("comment") as string,
      movieId: formData.get("id") as string,
    },
  });

  revalidatePath("/movie/[id]");
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  return (
    <div className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold mb-5">Your Opinion</h1>

      <div>
        <form action={postData}>
          <textarea
            name="comment"
            className="w-full border border-orange-300 focus:border-orange-600 transition-all duration-75  focus:ring-0 focus:outline-none rounded-lg p-2"
            placeholder="add your comment..."
          ></textarea>
          <input type="hidden" name="id" value={params.id} />
          <SubmitButton />
        </form>

        <div className="mt-5 flex flex-col gap-y-3">
          {data.map((post) => (
            <div key={post.id}>
              <p>{post.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}