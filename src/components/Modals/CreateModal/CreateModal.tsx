import { ChangeEvent, useEffect, useState } from "react";
import CustomEditor from "../CustomRichTextEditor";
import { Upload, X } from "lucide-react";
import { Post } from "../../../api/mock";
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";

type Language = "AZ" | "EN";
type Status = "Active" | "Inactive";
type Category = "News" | "Announcements";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (val: Post) => void;
  postToEdit?: Post | null;
};

interface FormData {
  title: string;
  slug: string;
}

export default function CreateModal({
  isOpen,
  onClose,
  onSave,
  postToEdit,
}: ModalProps) {
  const [step, setStep] = useState(1);
  const [html, setHtml] = useState("");
  const [language, setLanguage] = useState<Language>("EN");
  const [category, setCategory] = useState<Category>("News");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const { register, handleSubmit, reset, setValue, watch } =
    useForm<FormData>();
  const title = watch("title");
  const slug = watch("slug");

  useEffect(() => {
    if (postToEdit) {
      setValue("title", postToEdit.title);
      setValue("slug", postToEdit.slug);
      setHtml(postToEdit.htmlContent || "");
      setCategory(postToEdit.type as Category);
      setLanguage("EN"); // or load from data if you add later
      if (postToEdit.image) {
        fetch(postToEdit.image)
          .then((res) => res.blob())
          .then((blob) =>
            setCoverImage(new File([blob], "cover.png", { type: blob.type }))
          );
      }
    } else {
      reset();
      setHtml("");
      setCoverImage(null);
      setGalleryImages([]);
      setStep(1);
    }
  }, [postToEdit, setValue, reset]);

  if (!isOpen && !showSuccess) return null;

  const handleNext = () => {
    if (!title || !html || !slug) {
      alert("Please fill in the title and description before continuing.");
      return;
    }
    setStep(2);
  };

  const handleImageUpload = (
    e: ChangeEvent<HTMLInputElement>,
    type: "cover" | "gallery"
  ) => {
    const files = e.target.files;
    if (!files) return;
    const fileArray = Array.from(files);
    if (type === "cover") setCoverImage(fileArray[0]);
    else setGalleryImages((prev) => [...prev, ...fileArray]);
  };

  const removeGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const formatSharingTime = (date: Date = new Date()): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedHours = hours.toString().padStart(2, "0");

    return `${day}/${month}/${year}\n${formattedHours}:${minutes} ${ampm}`;
  };

  const handleFormSubmit = (data: FormData) => {
    const payload: Post = {
      id: postToEdit ? postToEdit.id : Date.now().toString(),
      title: data.title,
      slug: data.slug,
      htmlContent: html,
      type: category,
      image: coverImage ? URL.createObjectURL(coverImage) : "",
      sharingTime: formatSharingTime(),
      status: "Active" as Status,
      publishStatus: "Publish",
      author: "snovruzlu",
    };

    setShowSuccess(true);

    console.log("payload", payload);
    onSave(payload);

    onClose();
    setStep(1);
    reset();
    setCoverImage(null);
    setGalleryImages([]);
    setHtml("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div
            className="relative flex flex-col items-center justify-center gap-4 p-8 w-[510px] bg-white rounded-2xl border border-[#E5E7EB] 
      shadow-[0px_8px_24px_rgba(0,0,0,0.09)] text-center"
          >
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-center w-[96px] h-[96px] rounded-full bg-[#CEFFE1] mt-2 mb-4">
              <svg
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
              >
                <path
                  d="M43.8 61.8L64.95 40.65L60.75 36.45L43.8 53.4L35.25 44.85L31.05 49.05L43.8 61.8ZM48 78C43.85 78 39.95 77.212 36.3 75.636C32.65 74.062 29.475 71.925 26.775 69.225C24.075 66.525 21.938 63.35 20.364 59.7C18.788 56.05 18 52.15 18 48C18 43.85 18.788 39.95 20.364 36.3C21.938 32.65 24.075 29.475 26.775 26.775C29.475 24.075 32.65 21.937 36.3 20.361C39.95 18.787 43.85 18 48 18C52.15 18 56.05 18.787 59.7 20.361C63.35 21.937 66.525 24.075 69.225 26.775C71.925 29.475 74.062 32.65 75.636 36.3C77.212 39.95 78 43.85 78 48C78 52.15 77.212 56.05 75.636 59.7C74.062 63.35 71.925 66.525 69.225 69.225C66.525 71.925 63.35 74.062 59.7 75.636C56.05 77.212 52.15 78 48 78Z"
                  fill="rgb(0,205,79)"
                />
              </svg>
            </div>
            <h2
              className="text-[24px] font-semibold leading-[36px] text-[#2A2A2A]"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              {postToEdit ? "Updated Successfully!" : "Added Successfully!"}
            </h2>
            <p
              className="text-[14px] text-[#6A7282] leading-[20px] tracking-[-0.15px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {postToEdit
                ? "Your news updated successfully"
                : "Your news added successfully"}
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 w-[100%] h-[49px] rounded-lg bg-[#243C7B] text-white 
        text-[16px] font-medium hover:bg-[#1F3265] transition-all shadow-[0_1px_2px_rgba(105,81,255,0.05)]"
            >
              Ok
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-[728px] max-h-[95vh] overflow-y-auto bg-white rounded-2xl shadow-xl p-9 flex flex-col relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col gap-3 mb-6">
          <div className="flex items-end justify-between">
            <div className="flex items-end gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage("AZ")}
                  className={`flex items-center gap-1.5 px-3 py-1 border rounded-full text-sm transition-all ${
                    language === "AZ"
                      ? "border-[#243C7B] bg-[#FEFEFE]"
                      : "border-gray-300 bg-[#FEFEFE]"
                  }`}
                >
                  🇦🇿 <span className="text-sm">AZ</span>
                </button>
                <button
                  onClick={() => setLanguage("EN")}
                  className={`flex items-center gap-1.5 px-3 py-1 border rounded-full text-sm transition-all ${
                    language === "EN"
                      ? "border-[#243C7B] bg-[#FEFEFE]"
                      : "border-gray-300 bg-[#FEFEFE]"
                  }`}
                >
                  🇬🇧 <span className="text-sm">EN</span>
                </button>
              </div>

              <h2
                className="text-[28px] font-medium leading-9 text-black"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                {postToEdit
                  ? "Edit News / Announcement"
                  : "Create News / Announcement"}
              </h2>
            </div>

            <div className="text-[#243C7B] font-medium text-lg leading-9 mr-4">
              {step}/2
            </div>
          </div>

          <div className="flex mt-4 w-full h-1 rounded-full overflow-hidden gap-1">
            <div
              className={`flex-1 rounded-full transition-all ${step >= 1 ? "bg-[#243C7B]" : "bg-[#E0E7FA]"}`}
            ></div>
            <div
              className={`flex-1 rounded-full transition-all ${step >= 2 ? "bg-[#243C7B]" : "bg-[#E0E7FA]"}`}
            ></div>
          </div>
        </div>

        {step === 1 && (
          <div className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                {...register("title", { required: true })}
                placeholder="Enter title"
                className="w-full h-12 px-4 border border-[#F7F7F7] rounded-lg shadow-[0_0_10.9px_rgba(235,235,235,0.25)] outline-none focus:ring-2 focus:ring-[#243C7B] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL
              </label>
              <input
                {...register("slug", { required: true })}
                placeholder="naa.edu.az/"
                className="w-full h-12 px-4 border border-[#F7F7F7] rounded-lg shadow-[0_0_10.9px_rgba(235,235,235,0.25)] outline-none focus:ring-2 focus:ring-[#243C7B] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setCategory("News")}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all ${
                    category === "News"
                      ? "border-[#1447E6] bg-[#1447E6] text-white"
                      : "border-blue-600 text-[rgba(20,71,230,1)] hover:border-[#1447E6]"
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    color={`${category === "News" ? "text-white" : "text-rgba(20,71,230,1)"}`}
                  >
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" />
                  </svg>
                  News
                </button>
                <button
                  onClick={() => setCategory("Announcements")}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all ${
                    category === "Announcements"
                      ? "border-[#1447E6] bg-[#1447E6] text-white"
                      : "border-blue-600 text-[rgba(20,71,230,1)] hover:border-[#1447E6]"
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    color={`${category === "Announcements" ? "text-white" : "text-rgba(20,71,230,1)"}`}
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  Announcement
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "cover")}
                  className="hidden"
                  id="cover-upload"
                />
                <label
                  htmlFor="cover-upload"
                  className="w-full h-12 border border-[#F0F0F0] rounded-lg shadow-[0_0_10.9px_rgba(235,235,235,0.25)] flex items-center justify-center gap-3 text-gray-500 text-sm cursor-pointer hover:bg-gray-50 transition-all"
                >
                  <Upload size={20} />
                  <span>Upload Cover Image</span>
                </label>
                {coverImage && (
                  <div className="mt-3 relative inline-block">
                    <img
                      src={URL.createObjectURL(coverImage)}
                      alt="Cover"
                      className="w-32 h-24 rounded-lg object-cover border border-gray-200"
                    />
                    <button
                      onClick={() => setCoverImage(null)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center hover:bg-green-600 shadow-md"
                    >
                      ✓
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                HTML Content
              </label>
              <CustomEditor value={html} onChange={setHtml} />
            </div>

            <button
              onClick={handleNext}
              className="w-full mt-4 h-11 rounded-lg bg-[#243C7B] text-white font-medium hover:bg-[#1a2d5c] transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-900">
                Gallery Images
              </label>
              <p className="text-sm text-gray-500">JPG/PNG, multiple allowed</p>
            </div>

            <div className="relative">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleImageUpload(e, "gallery")}
                className="hidden"
                id="gallery-upload"
              />
              <label
                htmlFor="gallery-upload"
                className="w-full h-64 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-4 text-gray-500 cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                <Upload size={48} className="text-gray-400" />
                <span className="text-base">Upload an image</span>
              </label>
            </div>

            {galleryImages.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {galleryImages.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`Gallery ${index + 1}`}
                      className="w-32 h-24 rounded-lg object-cover border border-gray-200"
                    />
                    <button
                      onClick={() => removeGalleryImage(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center hover:bg-red-600 shadow-md text-lg leading-none"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep(1)}
                className="flex-1 h-11 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit(handleFormSubmit)}
                className="flex-1 h-11 rounded-lg bg-[#243C7B] text-white font-medium hover:bg-[#1a2d5c] transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
