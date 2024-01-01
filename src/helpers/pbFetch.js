import Pocketbase from "pocketbase";

const pb = new Pocketbase(process.env.NEXT_PUBLIC_API_URL);

export const pbFetch = async (collection, type = "all", options = {}, condition = "", data) => {
  let response;
  if (type === "all") {
    response = await pb.collection(collection).getFullList(options);
  } else if (type === "single") {
    response = await pb.collection(collection).getOne(condition, options);
  } else if (type === "create") {
    response = await pb.collection(collection).create(data);
  } else if (type === "update") {
    response = await pb.collection(collection).update(condition, data);
  } else if (type === "delete") {
    response = await pb.collection(collection).delete(condition);
  }
  return response;
}