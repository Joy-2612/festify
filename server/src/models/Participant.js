const mongoose = require("mongoose");

const ParticipantSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    leader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isTeam: {
      type: Boolean,
      required: true,
      default: false,
    },
    teamName: {
      type: String,
      required: false,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Participant = mongoose.model("Participant", ParticipantSchema);
module.exports = Participant;
