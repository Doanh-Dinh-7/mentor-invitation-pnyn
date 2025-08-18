"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Star, Sparkles, Trophy, Zap } from "lucide-react";

const rejectionMessages = [
  "Ơ không! Chúng mình cần bạn lắm! 🥺",
  "Đừng bỏ rơi các bạn sinh viên! 😢",
  "Python sẽ buồn nếu bạn từ chối đấy! 🐍💔",
  "Hãy suy nghĩ lại đi! Bạn là người hoàn hảo cho vai trò này! ✨",
  "Không được! Bạn phải giúp chúng mình! 🙏",
  "Làm ơn đi! TechTonic cần bạn! 🚀",
  "Đây là cơ hội tuyệt vời mà! Đừng bỏ lỡ! 💎",
  "Các bạn học viên đang chờ đợi bạn! 👥",
  "Bạn sẽ hối hận nếu từ chối đấy! 😭",
  "Hãy trở thành hero của Python! 🦸‍♂️",
];

export default function PythonMentorInvitation() {
  const [showRejection, setShowRejection] = useState(false);
  const [rejectionMessage, setRejectionMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleReject = () => {
    const randomMessage =
      rejectionMessages[Math.floor(Math.random() * rejectionMessages.length)];
    setRejectionMessage(randomMessage);
    setShowRejection(true);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setShowRejection(false), 7000);
    }, 100);
  };

  const handleAccept = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full bg-white/95 backdrop-blur-sm shadow-2xl animate-in zoom-in duration-700">
          <CardContent className="p-8 pb-0 text-center">
            <div className="mb-6">
              <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-bounce" />
              <div className="flex justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-yellow-400 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>

            <h3 className="text-4xl font-bold text-gray-800 mb-2">
              🎉 CHÚC MỪNG! 🎉
            </h3>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 p-5 font-title">
              PHẠM NGỌC YẾN NHI
            </h1>

            <p className="text-xl text-gray-700 mb-3">
              Cảm ơn bạn đã đồng ý trở thành{" "}
              <span className="font-bold text-purple-600">
                Mentor Lập trình Python
              </span>{" "}
              cho{" "}
              <span className="font-bold text-blue-600">TechTonic Club</span>!
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-3">
              <p className="text-lg text-gray-700 mb-2">
                🐍 Bạn sẽ hướng dẫn các bạn sinh viên khám phá thế giới Python
              </p>
              <p className="text-lg text-gray-700 mb-2">
                💡 Chia sẻ kinh nghiệm và kiến thức quý báu
              </p>
              <p className="text-lg text-gray-700">
                🚀 Cùng nhau xây dựng cộng đồng lập trình mạnh mẽ
              </p>
            </div>

            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ">
              Welcome to TechTonic Share - Guide! 💙
            </div>
            <p className="italic text-xs text-gray-500 mt-6">
              Xác nhận bằng cách: Chụp màn hình và gửi vào Ban Chủ Nhiệm
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-indigo-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-400/20 rounded-full animate-bounce"></div>
      </div>

      <Card
        className={`max-w-2xl w-full bg-white/95 backdrop-blur-sm shadow-2xl transition-all duration-500 ${
          isAnimating ? "animate-pulse scale-105" : ""
        }`}
      >
        <CardContent className="p-8 pb-0">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Code className="w-10 h-10 text-blue-600" />
              {/* <h1 className="text-3xl font-bold text-gray-800">
                TechTonic Club
              </h1> */}
              <img
                src="/banner.png" // đặt file trong public/images/logo.png
                alt="TechTonic Club"
                className="w-70 object-cover rounded-xl shadow-lg"
              />
              <Zap className="w-10 h-10 text-yellow-500" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Invitation Content */}
          <div className="text-center mb-8">
            <div className="mb-6">
              {/* <Sparkles className="w-16 h-16 text-purple-500 mx-auto mb-4 animate-spin" /> */}
              <img
                src="/logo.jpg" // đặt file trong public/images/logo.png
                alt="TechTonic Club"
                className="w-16 object-cover rounded-xl shadow-lg mx-auto mb-7 animate-spin
                transition-transform duration-500 ease-in-out hover:scale-125"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                🎯 LỜI MỜI ĐẶC BIỆT 🎯
              </h2>
              <p className="text-lg text-gray-600">
                Trở thành{" "}
                <span className="font-bold text-blue-600">Mentor</span> cho khóa
                học
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6 hover:shadow-lg transition-shadow duration-300 shadow-md font-title">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                "LẬP TRÌNH PYTHON"
              </h3>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="text-4xl">🐍</span>
                <Heart className="w-6 h-6 text-red-500 animate-pulse" />
                <span className="text-4xl">💻</span>
              </div>
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 p-5">
                PHẠM NGỌC YẾN NHI
              </h1>
            </div>

            <div className="text-left bg-gray-50 p-6 rounded-lg mb-6 shadow-md">
              <h4 className="font-bold text-gray-800 mb-3">
                🌟 Tại sao bạn nên tham gia?
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Chia sẻ kiến thức và kinh nghiệm với thế hệ trẻ
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Xây dựng network trong cộng đồng lập trình
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Được ghi nhận đóng góp trong cộng đồng TechTonic
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Cơ hội học hỏi và phát triển bản thân
                </li>
              </ul>
            </div>
          </div>

          {/* Rejection Message */}
          {showRejection && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded animate-in slide-in-from-left duration-300">
              <p className="text-red-700 font-medium text-center text-lg">
                {rejectionMessage}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleReject}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              😔 Từ chối
            </Button>

            <Button
              onClick={handleAccept}
              size="lg"
              className="px-8 py-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              🎉 Đồng ý ngay!
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              💙 Được gửi với tình yêu từ TechTonic Club 💙
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
