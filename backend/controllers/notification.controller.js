import Notification from "../models/notification.model.js";

export const getNotification = async (req, res) => {
  try {
    const userId = req.user._id;
    const notifications = await Notification.find({ to: userId }).populate({
      path: "from",
      select: "username profileImg",
    });
    await Notification.updateMany({ to: userId }, { read: true });

    res.status(200).json(notifications);
  } catch (error) {
    console.log("Error in getNotifications function", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteAllNotification = async (req, res) => {
  try {
    const userId = req.user._id;

    await Notification.deleteMany({ to: userId });

    res.status(200).json({ message: "Notification deleted successfully" });
  } catch (error) {
    console.log("Error in deleteNotifications function", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

//we can add delete only one notif if we want to
// export const deleteNotification = async (req, res) => {
//   try {
//     const notificationId = req.params;
//     const userId = req.user._id;
//     const notification = await Notification.findById(notificationId);

//     if (!notification) {
//       return res.status(404).json({ error: "Notification not found" });
//     }
//     if (notification.toString() !== userId.toString()) {
//       return res
//         .status(403)
//         .json({ error: "You are not allowed to delete this notification" });
//     }
//     await Notification.findByIdAndDelete(notificationId);
//     res.status(200).json({ message: "Notification deleted successfully" });
//   } catch (error) {
//     console.log("Error in deleteNotification function", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
