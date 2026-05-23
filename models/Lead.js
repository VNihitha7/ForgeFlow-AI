const mongoose =
  require("mongoose");

const leadSchema =
  new mongoose.Schema(
    {
      company: {
        type: String,
        required: true,
      },

      contact: {
        type: String,
        required: true,
      },

      email: String,

      phone: String,

      status: {
        type: String,
        default:
          "New Lead",
      },

      priority: {
        type: String,
        default:
          "Medium",
      },

      aiScore: {
        type: Number,
        default: 50,
      },

      notes: [
        {
          text: String,

          createdAt: {
            type: Date,
            default:
              Date.now,
          },
        },
      ],
    },

    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Lead",
    leadSchema
  );