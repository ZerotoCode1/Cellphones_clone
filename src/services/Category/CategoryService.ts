import servicesInstance from "@/Lib/Request/Services";
import { AxiosResponse } from "axios";
import { rootRequest } from "../RootReques/RootRequest";
import { useCategoryStore } from "@/Lib/Store/Category/CategoryStore";
import { useEffect } from "react";
export interface ResponseCategory {
  _id: string;
  name: string;
  image: string;
  description: string;
  status: boolean;
}

export type Response = AxiosResponse<{
  data: ResponseCategory[];
}>;
const CategoryServices = () => {
  const setCategory = useCategoryStore((state) => state.setListCategory);
  const listCategory = useCategoryStore((state) => state.listCategory);

  const getProDuctByCategory = async () => {
    try {
      const res = (await servicesInstance.get(
        rootRequest.LISTCATEGORY
      )) as Response;
      setCategory(res.data.data);
    } catch (error) {
      console.error("Failed to fetch products by category:", error);
      throw error;
    }
  };
  useEffect(() => {
    getProDuctByCategory();
  }, []);

  return {
    setCategory,
    listCategory,
  };
};

export default CategoryServices;
