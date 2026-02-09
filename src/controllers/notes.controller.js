import client from "../db.js";

export const addNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title?.trim() || !description?.trim()) {
      return res.status(400).json({
        message: "Title and description are required",
        success: false,
      });
    }

    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
        success: false,
      });
    }

    const note = await client.note.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        userId,
      },

      select: {
        id: true,
        title: true,
        description: true,
      },
    });

    return res.status(201).json({
      message: "Note created successfully",
      success: true,
      note,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await client.note.findUnique({
      where: { id },
    });

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
        success: false,
      });
    }

    if (note.userId !== req.user.id) {
      return res.status(403).json({
        message: "Not authorized to delete this note",
        success: false,
      });
    }

    await client.note.delete({
      where: { id },
    });

    return res.status(200).json({
      message: "Note deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const note = await client.note.findUnique({ where: { id } });

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
        success: false,
      });
    }

    if (note.userId !== req.user.id) {
      return res.status(403).json({
        message: "Not authorized to Update this note",
        success: false,
      });
    }

    const data = {};

    if (title?.trim()) data.title = title.trim();
    if (description?.trim()) data.description = description.trim();

    if (Object.keys(data).length === 0) {
      // object.keys(data) return the keys and .length ==0 checks if data is empty
      return res.status(400).json({
        message: "Nothing to update",
        success: false,
      });
    }

    const updatedNote = await client.note.update({
      where: { id },
      data,
      select: {
        id: true,
        title: true,
        description: true,
      },
    });

    return res.status(200).json({
      message: "Note updated successfully",
      success: true,
      note: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await client.note.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
      },
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    if (note.userId !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    return res.status(200).json({
      success: true,
      note,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/// Pagination , search,sorting,date filters
export const getNote = async (req, res) => {
  try {
    const userId = req.user.id;
    const { search, page = 1, limit = 5, sort = "desc" } = req.query;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const skip = (pageNumber - 1) * limitNumber;

    // base filter
    const where = {
      userId,
    };
    // search filter
    if (search) {
      where.title = {
        contains: search,
        mode: "insensitive",
      };
    }

    const notes = await client.note.findMany({
      where,
      skip,
      take: limitNumber,
      orderBy: {
        createdAt: sort === "asc" ? "asc" : "desc",
      },
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
      },
    });

    return res.status(200).json({
      success: true,
      page: pageNumber,
      limit: limitNumber,
      notes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
