import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      window.location.href = "/login";
      return;
    }

    const { data: profile } = await supabase
      .from("user_profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    setProfile(profile);
  };

  if (!profile) return <p>Yükleniyor...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Hoş geldin, {profile.full_name}</h2>
      <p>Rolün: <b>{profile.role}</b></p>

      {profile.role === "depo" && (
        <>
          <button onClick={() => (window.location.href = "/urunler")}>
            Ürün Yönetimi
          </button>
          <button onClick={() => (window.location.href = "/cikis-talep")}>
            Çıkış Talebi Oluştur
          </button>
        </>
      )}

      {profile.role === "baskan" && (
        <>
          <button onClick={() => (window.location.href = "/onay")}>
            Onay Bekleyen Talepler
          </button>
        </>
      )}
    </div>
  );
}
