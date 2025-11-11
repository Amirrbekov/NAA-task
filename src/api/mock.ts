export interface Post {
  id: string;
  slug: string;
  title: string;
  htmlContent: string;
  type: "News" | "Announcements";
  image: string;
  gallery?: string[];
  sharingTime: string;
  status: "Active" | "Inactive";
  publishStatus: "Publish" | "Draft";
  author: string;
}

export const mockPosts: Post[] = [
  {
    id: "1",
    slug: "lorem-ipsum-long-article1",
    title:
      "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    htmlContent:
      "<p>Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "2",
    slug: "lorem-ipsum-long-article2",
    title:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    htmlContent:
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
    type: "Announcements",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "3",
    slug: "lorem-ipsum-long-article3",
    title:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
    htmlContent:
      "<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of</p> ",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "4",
    slug: "lorem-ipsum-long-article4",
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    htmlContent:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>",
    type: "Announcements",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "5",
    slug: "lorem-ipsum-long-article5",
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    htmlContent:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "6",
    slug: "lorem-ipsum-long-article6",
    title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata ke...",
    htmlContent:
      "<p>Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilən...</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "7",
    slug: "lorem-ipsum-long-article7",
    title:
      "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    htmlContent:
      "<p>Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "8",
    slug: "lorem-ipsum-long-article8",
    title:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    htmlContent:
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
    type: "Announcements",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "9",
    slug: "lorem-ipsum-long-article9",
    title:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
    htmlContent:
      "<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of </p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "10",
    slug: "lorem-ipsum-long-article10",
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    htmlContent:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>",
    type: "Announcements",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "11",
    slug: "lorem-ipsum-long-article11",
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    htmlContent:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "12",
    slug: "lorem-ipsum-long-article12",
    title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata ke...",
    htmlContent:
      "<p>Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilən...</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "13",
    slug: "lorem-ipsum-long-article13",
    title:
      "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    htmlContent:
      "<p>Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Inactive",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "14",
    slug: "lorem-ipsum-long-article14",
    title:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    htmlContent:
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
    type: "Announcements",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "15",
    slug: "lorem-ipsum-long-article15",
    title:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
    htmlContent:
      "<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of </p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "16",
    slug: "lorem-ipsum-long-article16",
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    htmlContent:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>",
    type: "Announcements",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "17",
    slug: "lorem-ipsum-long-article17",
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    htmlContent:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "18",
    slug: "lorem-ipsum-long-article18",
    title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata ke...",
    htmlContent:
      "<p>Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilən...</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "19",
    slug: "lorem-ipsum-long-article19",
    title:
      "Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub",
    htmlContent:
      "<p>Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilmiş “Pilotsuz Sistemlər: Süni İntellekt, Dizayn və Səmərəlilik” (“International Symposium on Unmanned Systems: AI, Design and Efficiency” - ISUDEF’24) beynəlxalq simpoziumunun materiallar toplusu nüfuzlu Springer Nature nəşriyyatının “Sustainable Aviation” kitab seriyasında “Research and Updates on the Use of Artificial Intelligence in Drone Technology” adı ilə dərc olunub. Bu toplu pilotsuz sistemlər, süni intellekt və aviasiya texnologiyaları sahəsində aparılan ən son elmi tədqiqatları əhatə edir. Topluda yer alan elmi məqalələr Scopus bazasında indekslənəcək və Akademiyanın alim və tədqiqatçılarının beynəlxalq səviyyədə tanınması imkanlarını daha da artıracaq. Kitabla tanış olmaq üçün keçid etməyi unutmayın. linkə</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "20",
    slug: "lorem-ipsum-long-article20",
    title:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    htmlContent:
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
    type: "Announcements",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "21",
    slug: "lorem-ipsum-long-article21",
    title:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
    htmlContent:
      "<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of </p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "22",
    slug: "lorem-ipsum-long-article22",
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    htmlContent:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>",
    type: "Announcements",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "23",
    slug: "lorem-ipsum-long-article23",
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    htmlContent:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
  {
    id: "24",
    slug: "lorem-ipsum-long-article24",
    title: "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata ke...",
    htmlContent:
      "<p>Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilən...</p>",
    type: "News",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
    sharingTime: "06/11/2026\n10:19 AM",
    status: "Active",
    publishStatus: "Publish",
    author: "snovruzlu",
  },
];
