"use client";
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";

interface iAppProps {
  lectureId: string;
  title: string;
  curriculum: string;
  lectureList: boolean;
}

export default function LectureCard({
  lectureId,
  title,
  curriculum,
  lectureList,
}: iAppProps) {
  return (
    <>
      <button className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>
      <div className="right-5 top-5 absolute z-10">
        {lectureList ? (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>

      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
      </div>
    </>
  );
}
